import React, { Component } from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { observable, action } from 'mobx';
import { observer, inject } from 'mobx-react';

const Stack = createStackNavigator();

interface Props {}
@observer
export default class Index extends Component<Props> {
  render() {
    return <View />;
  }
}
