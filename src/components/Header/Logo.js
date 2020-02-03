import React from 'react';
import { Link } from 'react-router-dom';
// configs
import routes from '../../configs/routes';

const Logo = ({ image = '', width = 100, height = 30 }) => (
  <Link to={routes.MAIN}>
    <img src={image} alt="Klickly" width={width} height={height} />
    <span className="logo">Brands</span>
  </Link>
);

export default Logo;
