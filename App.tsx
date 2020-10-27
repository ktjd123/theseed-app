import React, { Component } from 'react';
import { StatusBar, Text } from 'react-native';
import {
  NavigationContainer,
  NavigationContainerRef,
} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { observer, Provider } from 'mobx-react';
import { observable } from 'mobx';

import { Auth } from './pages';

import { NavigationStore } from './store';

const navigation = new NavigationStore();

const Stack = createStackNavigator();

@observer
export default class Index extends Component {
  @observable navigationRef = React.createRef<NavigationContainerRef>();

  componentDidMount() {
    navigation.navigation = this.navigationRef.current;
  }

  render() {
    return (
      <Provider navigation={navigation}>
        <StatusBar />
        <NavigationContainer ref={this.navigationRef}>
          <Stack.Navigator>
            <Stack.Screen
              name="Auth"
              component={Auth}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    );
  }
}
