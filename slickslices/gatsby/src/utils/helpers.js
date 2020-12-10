const formatter = Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
});
const varPrices = {
  S: 0.75,
  M: 1,
  L: 1.25,
};

export function calcVariants(size, price) {
  return varPrices[size] * price;
}

export function calcTotal(arr) {
  if (arr.length < 1) return formatMoney(0);
  const total = arr.map((it) => it.price).reduce((acc, cur) => acc + cur);
  return formatMoney(total);
}

export function formatMoney(cents) {
  return formatter.format(cents / 100);
}

export function hydratePizza(order, pizzas) {
  return order.map((item) => {
    const pizza = pizzas.find((za) => za.id === item.id);
    return {
      ...item,
      name: pizza.name,
      thumbnail: pizza.image.asset.fluid.src,
      price: formatMoney(item.price),
    };
  });
}
