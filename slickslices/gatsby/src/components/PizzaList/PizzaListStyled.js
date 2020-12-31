import styled from 'styled-components';

const PizzaListStyled = styled.div`
  --max: 300px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(var(--max), 1fr));
  gap: 4rem;
  grid-auto-rows: auto auto 500px;
  @media (max-width: 600px) {
    --max: 200px;
  }
`;

const SingleZaStyled = styled.div`
  display: grid;
  @supports not (grid-template-rows: subgrid) {
    --rows: auto auto 1fr;
  }
  grid-template-rows: var(--rows, subgrid);
  grid-row: span 3;
  gap: 1rem;

  h2,
  p {
    margin: 0;
  }

  .gatsby-image-wrapper img {
    max-width: 100%;
  }
`;

export { PizzaListStyled, SingleZaStyled };
