import React from 'react';
import { ItemsGrid, ItemStyled } from '@styles';

export default function ItemGrid({ items }) {
  return (
    <ItemsGrid>
      {items.map((item) => (
        <ItemStyled key={item._id}>
          <p>
            <span className="mark tilt">{item.name}</span>
          </p>
          <img
            width="500"
            height="400"
            src={`${item.image.asset.url}?w=500&h=500&fit=crop`}
            alt={item.name}
            style={{
              background: `url(${item.image.asset.metadata.lqip})`,
              backgroundSize: 'cover',
            }}
          />
        </ItemStyled>
      ))}
    </ItemsGrid>
  );
}
