import React from 'react';

import Sky from 'components/SkyStars/skystars.component';
import NavBar from 'components/NavBar/navbar.component';

export function SkyLayout(props) {
  return (
    <>
      <Sky />
      <NavBar />
      {props.children}
    </>
  );
}
