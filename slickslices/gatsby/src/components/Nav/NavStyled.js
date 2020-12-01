import styled from 'styled-components';

const NavStyled = styled.nav`
  margin-bottom: 3rem;

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
  }
  a[aria-current='page'] {
    color: var(--red);
  }

  .logo {
    transform: translateY(-25%);
  }
`;

export default NavStyled;
