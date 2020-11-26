import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../Icon';
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native';


const Button = ({ children, title, icon, iconWidth, iconHeight }) => {

  const renderTitle = () => {
    if(children) {
      return children
    }

    if(icon) {
      return (
        <View style={styles.titleIconWrapper}>
          <Icon fill="#fff" icon={icon} width={iconWidth} height={iconHeight} style={styles.icon} />
          <Text style={styles.title}>{title}</Text>
        </View>
      )
    }

    return (
      <Text style={styles.title}>{title}</Text>
    )
  }

  return (
    <TouchableOpacity style={styles.wrapper}>
      {renderTitle()}
    </TouchableOpacity>
  )
}


Button.propTypes = {
  children: PropTypes.any,
  title: PropTypes.string,
  icon: PropTypes.string,
  iconWidth: PropTypes.any,
  iconHeight: PropTypes.any
};
Button.defaultProps = {
  children: null,
  title: "",
  icon: "",
  iconWidth: 24,
  iconHeight: 24
};


const styles = StyleSheet.create({
  wrapper: {
    paddingVertical: 16,
    paddingHorizontal: 24,
    borderRadius: 50,
    backgroundColor: "#F4315C",
  },
  title: {
    color: "#fff",
    fontWeight: "bold",
    textAlign: 'center'
  },
  titleIconWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%'

  },
  icon: {
    marginRight: 8
  }
})




export default React.memo(Button);