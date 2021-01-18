import React from 'react';
import {View, Text, StyleSheet, StatusBar} from 'react-native';

const LoginEmailSent: React.FC = () => {
  return (
    <View style={styles.wrapper}>
      <StatusBar barStyle="light-content" />
      <Text style={styles.text}>
        We've sent an email to you. Please check you email
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#13171e',
    padding: 20,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 24,
    color: 'white',
    textAlign: 'center',
  },
});

export default LoginEmailSent;
