import React, { Component } from 'react';
import { StatusBar, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { observer } from 'mobx-react';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

import { Auth, Navigation } from './pages';

const Stack = createStackNavigator();

@observer
export default class Index extends Component {
  render() {
    return (
      <>
        <StatusBar />
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="Auth"
              component={Auth}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </>
    );
  }
}
