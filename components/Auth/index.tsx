import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { observable, action } from 'mobx';
import { observer, inject } from 'mobx-react';

import styles from './styles';

interface Props {}
@observer
export default class Index extends Component<Props> {
  render() {
    return (
      <View>
        <Text>Auth</Text>
      </View>
    );
  }
}
