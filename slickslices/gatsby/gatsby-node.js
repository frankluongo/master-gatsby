import path from 'path';

export async function createPages(params) {
  await Promise.all([
    makePages({
      ...params,
      template: 'Pizza',
      query: 'allSanityPizza',
      slug: 'pizza',
    }),
    makePages({
      ...params,
      template: 'SliceMaster',
      query: 'allSanityPerson',
      slug: 'slicemaster',
    }),
    makeToppings(params),
  ]);
}

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
