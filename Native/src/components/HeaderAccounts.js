import * as React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { colors, device, fonts, gStyle, images } from '../constants';

function HeaderAccounts() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.containerAccounts}>
        <View style={styles.containerUser}>
          <Image source={images.robot} style={styles.avatar} />
          <Text style={[styles.username, styles.usernameActive]}>
            Profile 1
          </Text>
        </View>

        <View style={styles.containerUser}>
          <Image source={images.penguin} style={styles.avatar} />
          <Text style={styles.username}>Profile 2</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: colors.black,
    width: '100%'
  },
  containerAccounts: {
    alignItems: 'center',
    backgroundColor: colors.black,
    flexDirection: 'row',
    justifyContent: 'center',
    paddingBottom: 30,
    paddingTop: device.iPhoneNotch ? 64 : 40,
    width: '100%'
  },
  containerUser: {
    alignItems: 'center',
    marginHorizontal: 10
  },
  avatar: {
    height: 64,
    marginBottom: 6,
    resizeMode: 'contain',
    width: 64
  },
  username: {
    color: colors.inactiveGrey,
    fontFamily: fonts.medium,
    fontSize: 12
  },
  usernameActive: {
    color: colors.white,
    fontFamily: fonts.bold
  },
  containerPlus: {
    alignItems: 'center',
    backgroundColor: colors.moreAddProfileBg,
    borderRadius: 32,
    height: 64,
    justifyContent: 'center',
    marginBottom: 4,
    width: 64
  },
  containerManage: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    paddingBottom: 24
  },
  manageText: {
    color: colors.inactiveGrey,
    fontFamily: fonts.medium,
    marginLeft: 4
  }
});

export default HeaderAccounts;
