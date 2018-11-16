/**
 * yobboKit
 * App组件用来定义总体布局
 * @author yobbo
 * @date 2018-04-01
 * @email yobbo_wang@163.com
 * @copyright Copyright © 2016 yobbo
 */
 'use strict'
import React from 'react'
import { Platform,
  Text, 
  Image,
} from 'react-native'
import { createStackNavigator, createBottomTabNavigator, createSwitchNavigator } from 'react-navigation'
import Splash from './Splash'
import HomeContainer from './Home'
import ControlContainer from './Control'
import AutoContainer from './Auto'
import Login from '../page/login/index'
import {theme} from '../../resources/styles/com-styles.js'
import {tabBarLabelStyles} from '../../resources/styles/com-styles.js'
import ControlBut from './btn/ControlBut'
import { inject, observer } from 'mobx-react/native'

@observer
@inject('rootStore')
export default class App extends React.Component{
	constructor(props) {
      super(props)
      this.state = {
      }
  	} 

  	// 查看是否已登录
    async componentWillMount() {
	    try{
	        const storageStore = this.props.rootStore.storageStore
            const authorization = await storageStore.constructor.load('Authorization') // load Authorization
            const expire = await storageStore.constructor.load('expire') // load expire
            const lastRequestDate = await storageStore.constructor.load('lastRequestDate') // load lastRequestDate
            const host = await storageStore.constructor.load('host') // host
            const port = await storageStore.constructor.load('port') // port
            if(authorization && lastRequestDate && new Date(lastRequestDate).setSeconds(expire) > new Date().getTime()){ // token 有效
                await this.props.rootStore.authStore.setValue({
                    isLogin: true,
                    authorization: authorization,
                    expire: expire,
                    lastRequestDate: lastRequestDate,
                    host: host,
                    port: port
                })
            }
        } catch (error){
	        return false;
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
    ScreenAuto: {
      screen: AutoContainer,
      navigationOptions: () => tabOptions('自动化', require('../../resources/img/ic_my.png'))
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
  }else if(headerTitle == 'ScreenAuto'){
    return {
        headerTitle: '自动化',
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
},{
    initialRouteName: 'Splash'
})


