import { AppRegistry } from 'react-native'
import setup from './src/setup'
console.disableYellowBox = true // 关闭警告

AppRegistry.registerComponent('learnBestTools', () => setup)