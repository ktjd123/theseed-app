import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { observable, action } from 'mobx';
import { observer, inject } from 'mobx-react';

import { Auth } from '../components';

interface Props {
  navigation: StackNavigationProp<any>;
}
@observer
export default class Index extends Component<Props> {
  render() {
    return (
      <View>
        <Auth />
      </View>
    );
  }
}
