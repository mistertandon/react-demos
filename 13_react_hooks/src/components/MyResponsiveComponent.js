import React from 'react';

import { useWindowWidth } from './../hooks/UseWindowWidth';

export const MyResponsiveComponent = (props) => {

  const width = useWindowWidth(window.innerWidth);

  return (
    <p>Window width {width}</p>
  )
}