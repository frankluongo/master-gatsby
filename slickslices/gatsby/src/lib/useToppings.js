import { graphql, useStaticQuery } from 'gatsby';

export function useToppings() {
  const data = useStaticQuery(graphql`
    query {
      allToppings: allSanityTopping {
        toppings: nodes {
          name
          id
          vegetarian
        }
      }
      allPizzas: allSanityPizza {
        pizzas: nodes {
          id
          name
          toppings {
            name
            id
          }
        }
      }
    }
  `);

  const { toppings } = data.allToppings;
  const { pizzas } = data.allPizzas;

  const pizzasInToppings = countPizzasInToppings();

  return { pizzas, pizzasInToppings, toppings };

  function countPizzasInToppings() {
    const counts = pizzas
      .map((za) => za.toppings)
      .flat()
      .reduce((acc, top) => {
        // Check for existing
        const existingTops = acc[top.id];
        if (existingTops) {
          existingTops.count += 1;
        } else {
          acc[top.id] = {
            id: top.id,
            name: top.name,
            count: 1,
          };
        }
        // Otherwise, create a new entry
        return acc;
      }, {});
    return Object.values(counts).sort((a, b) => b.count - a.count);
  }
}
