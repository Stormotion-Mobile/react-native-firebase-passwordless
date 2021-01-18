import React, {useState} from 'react';
import {Alert, Image, StatusBar, StyleSheet, Text, View} from 'react-native';
import {TextInput, TouchableOpacity} from 'react-native-gesture-handler';
import {getBottomSpace} from 'react-native-iphone-x-helper';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');

  const isDisabled = !email;

  const buttonStyle = isDisabled
    ? [styles.button, styles.buttonDisabled]
    : styles.button;

  const onSubmit = () => {
    Alert.alert(`Email: ${email}`);
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
        <Text style={styles.buttonText}>Submit</Text>
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
