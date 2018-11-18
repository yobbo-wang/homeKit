/**
 * learnBestTools
 * App组件用来定义总体布局
 * @author yobbo
 * @date 2018-04-01
 * @email yobbo_wang@163.com
 * @copyright Copyright © 2016 yobbo
 */
 'use strict';
import React, {Component} from 'react';
import { Platform } from 'react-native';
import { StackNavigator, TabNavigator, SwitchNavigator } from 'react-navigation';
import HomeContainer from './HomeContainer';
import LearnContainer from './LearnContainer';
import SignInScreen from '../page/login/loginScreen';
import Splash from './Splash';
import { inject, observer } from 'mobx-react/native'

@inject('rootStore')
@observer
export default class App extends Component{
    constructor(props){
        super(props);
        this.state = {}

    }

    render() {
        return(
            <AppNavigator />
        )
    }
}

//底部导航栏
const TabContainer = TabNavigator(
  {
    Home: { screen: HomeContainer},
    Learn: { screen: LearnContainer },
  },
  {
    lazy: true,
    tabBarPosition: 'bottom',
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

const AuthStack = StackNavigator({ SignIn: SignInScreen });

//导航拦
const AppStack = StackNavigator(
	{
    Home: {
      screen: TabContainer,
      navigationOptions: {
        headerLeft: null
      }
    }
  },
  {
    headerMode: Platform.OS == 'ios' ? 'float' : 'screen',
    headerTransitionPreset: 'uikit', 
    navigationOptions: {
      headerTitleStyle: {
        color: '#fff',
        fontSize: 20,
        alignSelf: 'center',
        alignItems: 'center',
      },
      headerTintColor: '#fff'
    }
  }
);

const AppNavigator = SwitchNavigator(
    {
        Splash: Splash,
        App: AppStack,
        Auth: AuthStack,
    },
    {
        initialRouteName: 'Splash',
    }
);