import path from 'path';
import fetch from 'isomorphic-fetch';

export async function sourceNodes(params) {
  await Promise.all([fetchBeers(params)]);
}

export async function createPages(params) {
  await Promise.all([
    makePages({
      ...params,
      template: 'Pizza',
      query: 'allSanityPizza',
      slug: 'pizza',
    }),
    paginateSliceMasters(params),
    makePages({
      ...params,
      template: 'SliceMaster',
      query: 'allSanityPerson',
      slug: 'slicemaster',
    }),
    makeToppings(params),
  ]);
}

// Functions to make the things

async function makePages({ graphql, actions, template, query, slug }) {
  const component = path.resolve(`./src/templates/${template}.js`);
  const { data } = await graphql(`
    query {
      ${query} {
        nodes {
          id
          slug {
            current
          }
        }
      }
    }
  `);
  data[query].nodes.forEach((item) => {
    actions.createPage({
      path: `${slug}/${item.slug.current}`,
      component,
      context: {
        id: item.id,
      },
    });
  });
}

async function makeToppings({ graphql, actions }) {
  const component = path.resolve(`./src/pages/pizzas.js`);
  const { data } = await graphql(`
    query {
      toppings: allSanityTopping {
        nodes {
          id
          name
        }
      }
    }
  `);
  data.toppings.nodes.forEach((topping) => {
    actions.createPage({
      path: `topping/${topping.name}`,
      component,
      context: {
        topping: topping.name,
        id: topping.id,
      },
    });
  });
}

async function fetchBeers({ actions, createNodeId, createContentDigest }) {
  const res = await fetch('https://sampleapis.com/beers/api/ale');
  const beers = await res.json();
  for (const beer of beers) {
    const nodeMeta = {
      id: createNodeId(`beer-${beer.name}`),
      parent: null,
      children: [],
      internal: {
        type: 'Beer',
        mediaType: 'application/json',
        contentDigest: createContentDigest(beer),
      },
    };
    actions.createNode({
      ...beer,
      ...nodeMeta,
    });
  }
}

async function paginateSliceMasters({ graphql, actions }) {
  const { data } = await graphql(`
    query {
      slicemasters: allSanityPerson {
        totalCount
        nodes {
          name
          id
          slug {
            current
          }
        }
      }
    }
  `);
  const pageSize = parseInt(process.env.GATSBY_PAGE_SIZE);
  const pageCount = Math.ceil(data.slicemasters.totalCount / pageSize);
  const pagesArr = Array.from({ length: pageCount });
  pagesArr.forEach((_, i) => {
    const index = i + 1;
    actions.createPage({
      path: `/slicemasters/${index}`,
      component: path.resolve('./src/pages/slicemasters.js'),
      context: {
        skip: i * pageSize,
        currentPage: i + 1,
        pageSize,
      },
    });
  });
}
