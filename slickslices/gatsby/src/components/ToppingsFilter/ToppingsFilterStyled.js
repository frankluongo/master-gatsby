import styled from 'styled-components';

const ToppingsFilterStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 4rem;

  a {
    display: grid;
    grid-template-columns: auto 1fr;
    gap: 0 1rem;
    align-items: center;
    padding: 5px;
    background-color: var(--grey);
    border-radius: 2px;
  }

  .count {
    background-color: white;
    padding: 2px 5px;
  }

  .active,
  [aria-current='page'] {
    background-color: var(--yellow);
  }
`;

export { ToppingsFilterStyled };
