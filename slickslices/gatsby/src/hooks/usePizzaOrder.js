import { useState } from 'react';
import { useOrderContext } from '@context';
import { calcTotal, hydratePizza } from '@utils/helpers';

export function usePizzaOrder({ pizzas, values }) {
  const { order, setOrder } = useOrderContext();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);

  return {
    error,
    loading,
    message,
    order,
    addToOrder,
    removeFromOrder,
    submitOrder,
  };

  function addToOrder(newPizza) {
    setOrder([...order, newPizza]);
  }

  function removeFromOrder(i) {
    setOrder([...order.slice(0, i), ...order.slice(i + 1)]);
  }

  async function submitOrder(e) {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setMessage(null);
    const body = {
      order: hydratePizza(order, pizzas),
      total: calcTotal(order),
      name: values.name,
      email: values.email,
    };
    const res = await fetch(
      `${process.env.GATSBY_SERVERLESS_BASE}/placeOrder`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      }
    );
    const data = await res.json();
    if (res.status >= 400 && res.status < 600) {
      setLoading(false);
      setError(data.message);
    } else {
      setLoading(false);
      setMessage(data.message);
    }
  }
}
