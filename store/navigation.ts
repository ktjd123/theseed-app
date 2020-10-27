import { observable, action, runInAction } from 'mobx';
import Axios from 'axios';
import { NavigationContainerRef } from '@react-navigation/native';

export default class navigation {
  @observable navigation: NavigationContainerRef;
}
