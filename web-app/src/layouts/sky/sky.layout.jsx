import React from 'react';

import Sky from 'components/SkyStars/skystars.component';

export default function SkyLayout(props) {
  return (
    <React.Fragment>
      <Sky />
      {props.children}
    </React.Fragment>
  );
}
