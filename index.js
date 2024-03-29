import { activateKeepAwakeAsync } from 'expo-keep-awake';
import 'expo/build/Expo.fx';
import registerRootComponent from 'expo/build/launch/registerRootComponent';

import App from './App';

if (__DEV__) {
 activateKeepAwakeAsync();
}

registerRootComponent(App);
