import React from 'react';

const User = ({ image = '', width = 100, height = 30 }) => (
  <div>
    <span>Company</span>
    <img src={image} alt="company" width={width} height={height} />
  </div>
);

export default User;
