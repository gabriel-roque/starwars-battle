import React from 'react';

// import NavBar from 'components/NavBar/navbar.component';
// import Sky from 'components/SkyStars/skystars.component';

export function SkyLayout(props: any) {
  return (
    <>
      {/* <Sky /> */}
      {/* <NavBar /> */}
      {props.children}
    </>
  );
}
