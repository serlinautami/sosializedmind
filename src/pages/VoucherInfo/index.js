import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import { Navbar, NavbarGap, Gap, Button, Icon } from '../../components';
import { imgDummyBanner } from '../../assets';

const VoucherInfo = () => {
  return (
    <View style={styles.container}>
      <NavbarGap />
      <Navbar title="Info Voucher" showLeftButton />
      <ScrollView style={{paddingHorizontal: 24}}>
        <Gap height={24} />
        <Image source={imgDummyBanner} style={styles.image} />
        <View style={styles.body}>
          <Text style={styles.title}>
            Food Festival 65% KFC
          </Text>
          <Text style={styles.paragraf}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus congue arcu elit, tincidunt lacinia ipsum aliquet sit amet.
          </Text>
          <Gap height={24} />
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Icon icon="ic-calendar" width={24} height={24} fill="#000" style={{marginRight: 8}} />
            <Text>07.00 - 23.59</Text>
          </View>
          <Gap height={16} />
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Icon icon="ic-clock" width={24} height={24} fill="#000" style={{marginRight: 8}} />
            <Text>Berlaku hingga 1 Okt 2020</Text>
          </View>
          <Gap height={24} />
          <Text style={styles.title}>Cara menggunakan</Text>
          <Text style={styles.paragraf}>{`1. Datang ke tempat merchant terkait,\n2. Tanyakan kepada mereka dengan ramah untuk menukarkan Voucher\n3. Perlihatkan QR Voucher\n`}</Text>
        </View>
        <View style={styles.buttonWrapper}>
          <Button title="QR Voucher" icon="ic-qr" />
        </View>
      </ScrollView>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  image: {
    width: '100%',
    height: 250,
    borderRadius: 16,
    marginBottom: 24
  },
  body: {},
  title: {
    color: "#000",
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 16
  },
  paragraf: {
    color: "#888",
    fontSize: 16,
    lineHeight: 24,
  },
  buttonWrapper: {
    paddingBottom: 24
  }
})


export default VoucherInfo;