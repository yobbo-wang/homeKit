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
import {
    Platform,
    StatusBar,
} from 'react-native';
import { StackNavigator, TabNavigator, SwitchNavigator } from 'react-navigation';
import HomeContainer from './HomeContainer';
import AutoContainer from './AutoContainer';
import ControlContainer from './ControlContainer';
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

    // 改变状态栏样式
    _onNavigationStateChange = () =>{
        if(Platform.OS == 'android'){
            StatusBar.setBackgroundColor("white", true);
        }else{
            StatusBar.setBarStyle("light-content", true);
        }
    }

    render() {
        return(
            <AppNavigator screenProps = {this.props.rootStore.themeStore.data}
                          onNavigationStateChange={this._onNavigationStateChange}/>
        )
    }
}



//底部导航栏
const TabContainer = TabNavigator(
  {
    Home: { screen: HomeContainer},
    Control: {screen: ControlContainer},
    Auto: { screen: AutoContainer },
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