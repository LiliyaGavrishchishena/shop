import React from 'react';
import { Link } from 'react-router-dom';
// configs
import routes from '../../configs/routes';

const Alert = ({ image = '', amount = 0, width = 30, height = 30 }) => (
  <Link className="alert" to={routes.MAIN}>
    <img src={image} alt="Alert" width={width} height={height} />
    {amount > 0 && <span className="amount">{amount}</span>}
  </Link>
);

export default Alert;
