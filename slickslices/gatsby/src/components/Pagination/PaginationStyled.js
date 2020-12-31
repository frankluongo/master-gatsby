import styled from 'styled-components';

const PaginationStyled = styled.section`
  display: flex;
  align-content: center;
  align-items: center;
  justify-items: center;
  margin: 2rem 0;

  text-align: center;

  border: 1px solid var(--grey);
  border-radius: 5px;

  & > * {
    flex: 1;
    padding: 1rem;

    text-decoration: none;

    border-right: 1px solid var(--grey);

    &[aria-current],
    &.active {
      color: var(--red);
    }

    &[disabled] {
      pointer-events: none;

      color: var(--grey);
    }
  }

  & > *::last-child {
    border-right: none;
  }

  @media (max-width: 639px) {
    a {
      font-size: 1rem;
    }
    .text {
      display: none;
    }
  }
`;

export { PaginationStyled };
