import React from 'react';
import Img from 'gatsby-image';
import { calcVariants, formatMoney } from '@utils/helpers';
import { ItemStyled } from './OrderStyled';

export default function OrderPizza({ pizza, addToOrder }) {
  return (
    <ItemStyled>
      <Img
        width="50"
        height="50"
        fluid={pizza.image.asset.fluid}
        alt={pizza.name}
      />
      <div>
        <h2>{pizza.name}</h2>
      </div>
      <div>
        {['S', 'M', 'L'].map((size, i) => {
          const price = formatMoney(calcVariants(size, pizza.price));
          return (
            <button
              key={i}
              type="button"
              onClick={onClick.bind(null, size, pizza.price)}
            >
              {size} - {price}
            </button>
          );
        })}
      </div>
    </ItemStyled>
  );

  function onClick(size, price) {
    addToOrder({ id: pizza.id, size, price });
  }
}
