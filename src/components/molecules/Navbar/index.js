import React from 'react';
import PropTypes from 'prop-types';
import { useNavigation } from '@react-navigation/native';
import { Icon } from '../../atoms';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Constants from 'expo-constants';


const Navbar = ({ title, onBackPress, showRightButton, onRightPress, showLeftButton }) => {

  const navigation = useNavigation();

  const handleBackPress = () => {
    if(onBackPress) {
      onBackPress();
    } 
    if(navigation.canGoBack()) {
      navigation.goBack();
    }
  }

  const renderTitle = () => {
    if(typeof(title) === 'string') {
      return (
        <Text style={styles.navTitleText}>{title}</Text>
      )
    }
    
    return title;
  }

  const renderRightButton = () => {

    if(!showRightButton) {
      return null;
    }

    return (
      <TouchableOpacity onPress={onRightPress} style={styles.navButton}>
        <Icon icon="ic-share" width={24} height={24} />
      </TouchableOpacity>
    )
  }

  const renderLeftButton = () => {
    if(!showLeftButton) {
      return null;
    }
    return (
      <TouchableOpacity style={styles.navButton} onPress={handleBackPress}>
        <Icon fill="#000" icon="ic-arrow-left" width={24} height={24} />
      </TouchableOpacity>
    )
  }

  return (
    <View style={styles.wrapper}>
      {renderLeftButton()}
      <View>{renderTitle()}</View>
      {renderRightButton()}
    </View>
  )
}

Navbar.propTypes = {
  title: PropTypes.any,
  onRightPress: PropTypes.func,
  showRightButton: PropTypes.bool,
  onBackPress: PropTypes.func
}
Navbar.defaultProps = {
  title: null,
  showRightButton: false,
  showLeftButton: true,
  onBackPress: () => {},
  onRightPress: () => {}
}

const styles = StyleSheet.create({
  wrapper: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#fff',
    position: 'absolute',
    width: '100%',
    top: 0,
    left: 0,
    flexDirection: 'row',
    alignItems: 'center',
    zIndex: 1,
    height: 64 + Constants.statusBarHeight,
    paddingHorizontal: 24
  },
  navButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 64,
    marginRight: 16
  },
  navTitle: {},
  navTitleText: {
    fontSize: 18,
    fontWeight: 'bold'
  }
})

export default React.memo(Navbar);