import { Navigation } from 'react-native-navigation';

import SearchScreen from './search/index';


// register all screens of the app (including internal ones)
export function registerScreens() {
  Navigation.registerComponent('frontend.SearchScreen', () => SearchScreen);
}