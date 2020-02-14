import React from 'react';

import Sky from 'components/SkyStars/skystars.component';
import NavBar from 'components/NavBar/navbar.component';

export default function SkyLayout(props) {
  return (
    <React.Fragment>
      <Sky />
      <NavBar />
      {props.children}
    </React.Fragment>
  );
}
