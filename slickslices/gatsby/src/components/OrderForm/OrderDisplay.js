import React from 'react';
import Img from 'gatsby-image';
import { calcVariants, formatMoney } from '@utils/helpers';
import { ItemStyled } from './OrderStyled';

export default function OrderDisplay({ order, pizzas, removeFromOrder }) {
  return (
    <>
      {order.map((singleOrder, i) => {
        const za = pizzas.find((singleZa) => singleZa.id === singleOrder.id);
        return (
          <ItemStyled key={`${singleOrder.id}-${i}`}>
            <Img fluid={za.image.asset.fluid} alt={za.name} />
            <h2>{za.name}</h2>
            <p>
              {formatMoney(calcVariants(singleOrder.size, za.price))}
              <button
                type="button"
                className="remove"
                title={`Remove ${singleOrder.size} ${za.name} from Order`}
                onClick={removeFromOrder.bind(null, i)}
              >
                &times;
              </button>
            </p>
          </ItemStyled>
        );
      })}
    </>
  );
}
