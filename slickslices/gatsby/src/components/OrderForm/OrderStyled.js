import styled from 'styled-components';

export const OrderStyled = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;

  fieldset {
    grid-column: span 2;
    max-height: 600px;
    overflow: auto;
    display: grid;
    gap: 1rem;
    align-content: start;

    &.order,
    &.menu {
      grid-column: span 1;
    }
  }

  .maple-syrup {
    display: none;
  }
  @media (max-width: 900px) {
    fieldset.menu,
    fieldset.order {
      grid-column: span 2;
    }
  }
`;

export const ItemStyled = styled.div`
  position: relative;

  display: grid;
  grid-template-columns: 100px 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 0 1.3rem;
  align-content: center;
  align-items: center;

  .gatsby-image-wrapper {
    grid-row: span 2;
    height: 100%;
  }
  h2 {
    @media (max-width: 639px) {
      font-size: 1.5rem;
    }
  }

  p {
    margin: 0;
  }

  button {
    --size: 1.5rem;
    font-size: var(--size);
    @media (max-width: 639px) {
      --size: 1rem;
      display: block;
    }
  }

  button + button {
    @media (max-width: 639px) {
      margin-top: 1rem;
    }
    @media (min-width: 640px) {
      margin-left: 1rem;
    }
  }

  .remove {
    position: absolute;
    right: 0;
    top: 0;

    color: var(--red);
    font-size: 3rem;
    line-height: 1rem;

    background: none;
    box-shadow: none;
  }
`;
