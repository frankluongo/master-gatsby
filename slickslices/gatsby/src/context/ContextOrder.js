import React, { createContext, useContext, useState } from 'react';

const defaults = {
  order: [],
  setOrder: () => {},
};

const OrderContext = createContext();

export function OrderProvider({ children }) {
  const [order, setOrder] = useState([]);

  return (
    <OrderContext.Provider value={{ ...defaults, order, setOrder }}>
      {children}
    </OrderContext.Provider>
  );
}

export function useOrderContext() {
  return useContext(OrderContext);
}
