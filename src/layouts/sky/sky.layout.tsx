import React from 'react';

import { SkyStars, NavBar } from 'layouts/sky/components';

export function SkyLayout(props: any) {
  return (
    <>
      <SkyStars />
      <NavBar />
      {props.children}
    </>
  );
}
