import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';
import { Navbar, Gap, ListItem } from '../../components';
import { routePath } from '../../routes';

const ListPage = ({ navigation }) => {
  return (
    <React.Fragment>
      <View style={styles.container}>
        <ScrollView>
          <ListItem onPress={() => navigation.navigate(routePath.HOME)} title="Obrolan" />
          <ListItem onPress={() => navigation.navigate(routePath.VOUCHERINFO)} title="Info Voucher" />
        </ScrollView>
      </View>
      <Navbar showLeftButton={false} title="List Page" />
    </React.Fragment>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight + 64,
    backgroundColor: "#fff"
  }
})

export default ListPage;