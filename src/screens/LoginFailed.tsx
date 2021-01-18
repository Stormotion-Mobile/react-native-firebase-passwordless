import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View, Text, StyleSheet, StatusBar, Button} from 'react-native';

const LoginEmailSent: React.FC = () => {
  const {navigate} = useNavigation();
  const onLogin = () => {
    navigate('Login');
  };

  return (
    <View style={styles.wrapper}>
      <StatusBar barStyle="light-content" />
      <Text style={styles.text}>
        The link you've opened is expired or invalid
      </Text>
      <Button title="Login" onPress={onLogin} color="white" />
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
