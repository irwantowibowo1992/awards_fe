import React from 'react';

const Gap = ({ x = 0, y = 0 }) => {
  return <div style={{ margin: `${x}px ${y}px` }}></div>;
};

export default Gap;
