import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { observable, action } from 'mobx';
import { observer, inject } from 'mobx-react';

interface Props {
	navigation: StackNavigationProp<any>;
}
@observer
export default class Index extends Component<Props> {
	render() {
		// console.warn(this.props);
		return (
			<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
				<Text>Home Screen1</Text>
				<Button title="Go to Details" onPress={() => this.props.navigation.navigate('Details', { itemId: 86 })} />
				<Button title="Go to Details" onPress={() => this.props.navigation.push('Home')} />
			</View>
		);
	}
}
