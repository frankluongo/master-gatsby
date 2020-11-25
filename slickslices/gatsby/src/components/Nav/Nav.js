import React from 'react';
import { Link } from 'gatsby';
import Logo from '@components/Logo';
import NavStyled from './NavStyled';

export default function Nav() {
  return (
    <NavStyled>
      <ul>
        <li>
          <Link to="/">Hot Now</Link>
        </li>
        <li>
          <Link to="/pizzas">Pizza Menu</Link>
        </li>
        <li>
          <Logo />
        </li>
        <li>
          <Link to="/slicemasters">Slicemasters</Link>
        </li>
        <li>
          <Link to="/orders">Order Ahead</Link>
        </li>
      </ul>
    </NavStyled>
  );
}
