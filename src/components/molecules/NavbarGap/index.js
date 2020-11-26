import React from 'react';
import { Gap } from '../../atoms';
import Constants from 'expo-constants';

const NavbarGap = () => {
  return (
    <Gap height={Constants.statusBarHeight + 64} />
  )
}

export default React.memo(NavbarGap);