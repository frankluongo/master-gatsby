import React from 'react';
import { useForm, usePizzaOrder } from '@hooks';
import { usePizzas } from '@lib';

import { calcTotal } from '@utils/helpers';
import OrderInput from './OrderInput';
import OrderPizza from './OrderPizza';
import OrderDisplay from './OrderDisplay';
import { OrderStyled } from './OrderStyled';

export default function OrderForm() {
  const pizzas = usePizzas();
  const { values, updateValues } = useForm({ name: '', email: '' });
  const {
    error,
    loading,
    message,
    order,
    addToOrder,
    removeFromOrder,
    submitOrder,
  } = usePizzaOrder({
    pizzas,
    values,
  });

  return (
    <OrderStyled onSubmit={submitOrder}>
      <fieldset className="info" disabled={loading}>
        <legend>Your Info</legend>
        <OrderInput
          name="name"
          label="Name"
          value={values.name}
          onChange={updateValues}
        />
        <OrderInput
          name="email"
          type="email"
          label="Email"
          value={values.email}
          onChange={updateValues}
        />
      </fieldset>
      <fieldset className="menu" disabled={loading}>
        <legend>Menu</legend>
        {pizzas.map((pizza) => (
          <OrderPizza key={pizza.id} pizza={pizza} addToOrder={addToOrder} />
        ))}
      </fieldset>
      <fieldset className="order" disabled={loading}>
        <legend>Order</legend>
        <OrderDisplay
          order={order}
          removeFromOrder={removeFromOrder}
          pizzas={pizzas}
        />
      </fieldset>
      <fieldset>
        <h3>Your Total is {calcTotal(order)}</h3>
        {error && <div>{error}</div>}
        {message && <div>{message}</div>}
        <button type="submit" disabled={loading}>
          {loading ? 'Placing Order...' : 'Order Ahead'}
        </button>
      </fieldset>
    </OrderStyled>
  );
}
