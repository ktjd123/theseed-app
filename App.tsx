import React, { Component } from 'react';
import { Text } from 'react-native';
import { Provider, observer } from 'mobx-react';
// import { NavigationContainer } from '@react-navigation/native';

import AuthStore from './store/auth';

interface Props {}

const auth = new AuthStore();

@observer
export default class Index extends Component<Props> {
	render() {
		return (
			<Provider auth={auth}>
				<Text>hi</Text>
				<Text>hi</Text>
				<Text>hi</Text>
				<Text>hi</Text>
				<Text>hi</Text>
				<Text>hi</Text>
			</Provider>
		);
	}
}
