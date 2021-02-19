import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { SkyStars, NavBar } from 'layouts/sky/components';

import { getSessionPlayer } from 'utils';

import * as types from 'modules/character/store/character.types';

export function SkyLayout(props: any) {
  const dispath = useDispatch();

  useEffect(() => {
    if (getSessionPlayer()) dispath({ type: types.RESTORE_SESSION, data: getSessionPlayer() });
  }, []);

  return (
    <>
      <SkyStars />
      <NavBar />
      {props.children}
    </>
  );
}
