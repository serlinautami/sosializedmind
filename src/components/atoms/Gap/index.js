import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';

const Gap = ({ width, height }) => {
  return (
    <View  style={{
      width,
      height
    }}/>
  )
}

Gap.propTypes = {
  width: PropTypes.any,
  height: PropTypes.any,
}
Gap.defaultProps = {
  width: '100%',
  height: 16
}

export default React.memo(Gap)