import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { observable, action } from 'mobx';
import { observer, inject } from 'mobx-react';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';

interface Props {
	navigation: StackNavigationProp<any>;
	route: RouteProp<
		{
			Index: {
				itemId: number;
			};
		},
		'Index'
	>;
}
@observer
export default class Index extends Component<Props> {
	render() {
		const { route } = this.props;
		route.params.itemId;
		return (
			<View>
				<Text>Details Screen itemId is {route.params.itemId} </Text>
				<Button title="go to details again" onPress={() => this.props.navigation.push('Details')} />
				<Button title="Go to Home" onPress={() => this.props.navigation.navigate('Home')} />
				<Button title="Go Back" onPress={() => this.props.navigation.goBack()} />
				<Button title="Pop To Top" onPress={() => this.props.navigation.popToTop()} />
			</View>
		);
	}
}
