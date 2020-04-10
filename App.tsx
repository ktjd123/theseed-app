import React, { Component } from 'react';
import { Button, Alert } from 'react-native';
import { Provider, observer } from 'mobx-react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { Home, Detail } from './screen';

import AuthStore from './store/auth';

interface Props {}

const auth = new AuthStore();

const Stack = createStackNavigator();

@observer
export default class Index extends Component<Props> {
	render() {
		return (
			<Provider auth={auth}>
				<NavigationContainer>
					<Stack.Navigator
						screenOptions={{
							headerStyle: {
								backgroundColor: '#f4511e',
							},
							headerTintColor: '#fff',
							headerTitleStyle: {
								fontWeight: 'bold',
							},
							headerRight: () => {
								return <Button title="Info" onPress={() => Alert.alert('알림', 'hi')} />;
							},
						}}
					>
						<Stack.Screen name="Home" component={Home} />
						<Stack.Screen
							name="Details"
							component={Detail}
							initialParams={{ itemId: 832 }}
							options={({ route }) => ({
								title: route.params.itemId,
							})}
						/>
					</Stack.Navigator>
				</NavigationContainer>
			</Provider>
		);
	}
}
