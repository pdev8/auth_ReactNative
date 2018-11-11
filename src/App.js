import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
	state = { loggedIn: null };

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

		firebase.auth().onAuthStateChanged((user) => {
			if (user) {
				this.setState({ loggedIn: true });
			} else {
				this.setState({ loggedIn: false });
			}
		});
	}

	renderContent() {
		switch (this.state.loggedIn) {
			case true:
				return (
				<Button onPress={() => firebase.auth().signOut()}>Log Out</Button>
				);
			case false:
				return <LoginForm />;
			default:
				return <Spinner size={'large'} />;
		}
	}

	render() {
		return (
			<View>
				<Header headerText="Authentication" />
				{this.renderContent()}
			</View>
		);
	}
}

export default App;
