import React, {useState} from 'react';
import {Image, StatusBar, StyleSheet, Text, View} from 'react-native';
import {TextInput, TouchableOpacity} from 'react-native-gesture-handler';
import {getBottomSpace} from 'react-native-iphone-x-helper';
import auth from '@react-native-firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');

  const [sentEmail, setSentEmail] = useState(false);

  const isDisabled = !email || sentEmail;

  const buttonStyle = isDisabled
    ? [styles.button, styles.buttonDisabled]
    : styles.button;

  const onSubmit = async () => {
    setSentEmail(true);
    await AsyncStorage.setItem('email', email);
    auth().sendSignInLinkToEmail(email, {
      android: {packageName: 'YOUR PACKAGE NAME'},
      handleCodeInApp: true,
      iOS: {bundleId: 'com.stormotion.hypno'},
      url: 'https://stormotiontest.page.link',
    });
  };

  return (
    <View style={styles.wrapper}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.spacer} />
      <Text style={styles.header}>Login to Stormotion!</Text>
      <Image
        source={require('../images/app-logo.png')}
        style={styles.image}
        resizeMode="contain"
      />
      <View style={styles.spacer} />
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        autoCompleteType="email"
        autoCapitalize="none"
        placeholder="email"
      />
      <View style={styles.spacer} />
      <Text style={styles.terms}>
        By pressing "submit", you agree with our Terms of Use
      </Text>
      <TouchableOpacity
        onPress={onSubmit}
        style={buttonStyle}
        disabled={isDisabled}>
        <Text style={styles.buttonText}>
          {sentEmail ? "We've already sent you an email" : 'Submit'}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    flexDirection: 'column',
  },
  image: {
    alignSelf: 'center',
    marginTop: 32,
  },
  spacer: {flex: 1},
  input: {
    padding: 20,
    borderRadius: 5,
    backgroundColor: 'white',
    marginHorizontal: 20,
    color: '#13171e',
  },
  button: {
    paddingTop: 20,
    paddingBottom: getBottomSpace() + 20,
    backgroundColor: '#13171e',
    alignItems: 'center',
  },
  buttonDisabled: {
    backgroundColor: 'grey',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  terms: {
    paddingHorizontal: 20,
    marginVertical: 16,
    textAlign: 'center',
    color: 'grey',
  },
  header: {
    paddingHorizontal: 20,
    fontSize: 32,
    textAlign: 'center',
    color: '#13171e',
  },
});

export default Login;
