/** application enter */

import {AppRegistry} from 'react-native';
import setup from './app/setup';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => setup);
