/**
 * yobboKit
 * App组件用来定义总体布局
 * @author yobbo
 * @date 2018-04-01
 * @email yobbo_wang@163.com
 * @copyright Copyright © 2016 yobbo
 */
 'use strict'
import React, {Component} from 'react'
import { Platform,
StyleSheet,
  View,
  Text, 
  Image,
  TouchableHighlight  
} from 'react-native'
import { createStackNavigator, createBottomTabNavigator, createSwitchNavigator } from 'react-navigation'
import Splash from './Splash'
import HomeContainer from './Home'
import ControlContainer from './Control'
import MyContainer from './My'
import Login from '../page/login/index'
import {theme} from '../../resources/styles/com-styles.js'
import {tabBarLabelStyles} from '../../resources/styles/com-styles.js'
import ControlBut from './ControlBut'

export default class App extends Component{
	constructor(props) {
      super(props)
      this.state = {
      }
  	} 

  	render() {
    	return <AppNavigator/>
  	}
}

const tabOptions = (title, img) => {
    return {
        tabBarIcon: ({ tintColor }) => {
          return (
              <Image style={{width: 26, height: 26,resizeMode: 'contain',
            tintColor: tintColor == '#999999' ? tintColor : theme }} 
            source={img} />
          )
        },
        tabBarLabel: ({ tintColor, fontSize}) => (
            <Text style={[{color: tintColor == '#999999' ? tintColor : theme}, tabBarLabelStyles.res]}>{title}</Text>
        ),
        tabBarVisible: true,
    }
}

//底部导航栏
const TabNavigator = createBottomTabNavigator(
  {
    ScreenHome: {
      screen: HomeContainer,
      navigationOptions: () => tabOptions('仪表盘', require('../../resources/img/ic_polular.png'))
    },
    ScreenControl: {
      screen: ControlContainer,
      navigationOptions: () => tabOptions('智能控制', require('../../resources/img/control.png'))
    },
    ScreenMy: {
      screen: MyContainer,
      navigationOptions: () => tabOptions('我的', require('../../resources/img/ic_my.png'))
    },
  },
  {
    lazy: true,
    tabBarOptions: {
      inactiveTintColor: '#999999',
      showIcon: true,
      style: {
        backgroundColor: '#fff'
      },
      indicatorStyle: {
        opacity: 0
      },
      tabStyle: {
        padding: 0
      }
    }
  }
)

TabNavigator.navigationOptions = ({ navigation }) => {
  const { routeName } = navigation.state.routes[navigation.state.index]
  let headerTitle = routeName
  const headerObj = {
      headerStyle: {
          backgroundColor: theme
      },
      headerTitleStyle: {
        color: '#fff',
        fontSize: 20,
        alignSelf: 'center',
        alignItems: 'center',
      },
      headerTintColor: '#fff',
      headerMode: Platform.OS == 'ios' ? 'float' : 'screen',
      headerTransitionPreset: 'uikit', 
  }
  
  if(headerTitle == 'ScreenHome'){
    return {
        headerTitle: '仪表盘',
        ...headerObj
    }
  }else if(headerTitle == 'ScreenControl'){
    return {
        headerTitle: '智能控制',
        headerRight: <ControlBut />,
        ...headerObj
    } 
  }else if(headerTitle == 'ScreenMy'){
    return {
        headerTitle: '我的',
        ...headerObj
    } 
  }else if(headerTitle == 'ScreenLogin'){
      return{
          headerTitle: null,
      }
  }
}

const AppStack = createStackNavigator({
    TabNavigator: TabNavigator
}, {
    initialRouteName: 'TabNavigator',
})

const LoginStack = createStackNavigator({
    Login: Login
})

const AppNavigator = createSwitchNavigator({
    Splash: Splash,
    Home: AppStack,
    Login: LoginStack
})


