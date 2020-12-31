import styled from 'styled-components';

const NavStyled = styled.nav`
  ul {
    align-items: center;
    display: grid;
    grid-template-columns: 1fr 1fr auto 1fr 1fr;
    gap: 2rem;

    margin: 0;
    margin-top: -6rem;
    padding: 0;

    text-align: center;

    list-style: none;
  }

  li {
    --rotate: -2deg;
    order: 1;

    transform: rotate(var(--rotate));
    &:nth-child(1) {
      --rotate: 1deg;
    }
    &:nth-child(2) {
      --rotate: -2.5deg;
    }
    &:nth-child(4) {
      --rotate: 1.2deg;
    }

    &:hover {
      --rotate: 3deg;
    }
  }
  a {
    font-size: 3rem;
    text-decoration: none;

    &:hover,
    &:focus {
      color: var(--red);
    }
    @media (max-width: 1023px) {
      font-size: 1.5rem;
    }
  }
  a[aria-current='page'] {
    color: var(--red);
  }

  .logo-item {
    transform: translateY(-25%);
  }
  @media (max-width: 620px) {
    --columns: 4;
    ul {
      grid-template-rows: auto auto;
      grid-template-columns: repeat(var(--columns), 1fr);
      margin-bottom: 2rem;
    }
    .logo-item {
      display: flex;
      justify-content: center;
      order: -1;
      grid-column: 1 / -1;
      transform: none;
    }
  }
  @media (max-width: 500px) {
    --columns: 2;
  }
`;

export default NavStyled;
