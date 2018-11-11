import React from 'react';
import { View } from 'react-native';
import { FormLabel, FormInput, FormValidationMessage } from 'react-native-elements';

const Login = () => (
	<View>
		<FormLabel>Email</FormLabel>
		<FormInput>example@example.com</FormInput>
		<FormValidationMessage>Error message</FormValidationMessage>
	</View>
);

export default Login;
