import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, StyleSheet, Text } from 'react-native';

const ListItem = ({ title, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.wrapper}>
      <Text style={styles.title}>
        {title}
      </Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: "#fff",
    paddingHorizontal: 24,
    paddingVertical: 16,
    borderBottomColor: "#ddd",
    borderBottomWidth: 1
  },
  title: {
    fontSize: 16
  },
})

ListItem.propTypes = {
  title: PropTypes.string,
  onPress: PropTypes.func
};
ListItem.defaultProps = {
  title: '',
  onPress: () => {}
};

export default React.memo(ListItem);