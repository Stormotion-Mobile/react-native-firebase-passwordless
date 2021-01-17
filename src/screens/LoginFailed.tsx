import React from 'react';
import {Text, View} from 'react-native';

const LoginFailed: React.FC = () => {
  return (
    <View>
      <Text>The email link you've opened is expired or invalid</Text>
    </View>
  );
};

export default LoginFailed;
