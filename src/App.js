import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
	// Lifecycle methods are automatically invoked inside the component
	componentWillMount() {
		firebase.initializeApp({
			apiKey: 'AIzaSyBkmXjYbUdfjPbDpFUB_v6IFJpoaDQ1xvs',
			authDomain: 'auth-f01a6.firebaseapp.com',
			databaseURL: 'https://auth-f01a6.firebaseio.com',
			projectId: 'auth-f01a6',
			storageBucket: 'auth-f01a6.appspot.com',
			messagingSenderId: '34880901777'
		});
	}

	render() {
		return (
			<View>
				<Header headerText="Authentication" />
				<LoginForm />
			</View>
		);
	}
}

export default App;
