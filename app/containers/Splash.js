/**
 * learnBestTools
 * App 启动图组件（用于做推广使用）
 * @author yobbo
 * @date 2018-04-01
 * @email yobbo_wang@163.com
 * @copyright Copyright © 2016 yobbo
 */
'use strict'
import React, {Component} from 'react'
import { Dimensions, Animated } from 'react-native'
import SplashScreen from 'react-native-splash-screen'
import NavigationUtil from '../util/NavigationUtil'

const maxHeight = Dimensions.get('window').height
const maxWidth = Dimensions.get('window').width
const splashImg = require('../../resources/img/splash.png') //TODO上线后，动态更改启动图
import { inject, observer } from 'mobx-react/native'

@observer
@inject('rootStore')
export default class Splash extends Component{
	static navigationOptions = {
    	header: null
  	}

  	constructor(props) {
	    super(props)
	    this.state = {
	      bounceValue: new Animated.Value(1)
	    }
  	}

	componentDidMount() {
        const isLogin = this.props.rootStore.authStore.isLogin
  		const { navigate } = this.props.navigation  // TODO
	    Animated.timing(this.state.bounceValue, {
	      toValue: 1.2,
	      duration: 1000
	    }).start()
	    SplashScreen.hide()
	    this.timer = setTimeout(() => {
			if(isLogin) {
                NavigationUtil.reset(this.props.navigation, 'TabNavigator')
			}else{
                NavigationUtil.reset(this.props.navigation, 'Login')
			}
	    }, 1000)
  	}

  	componentWillUnmount() {
    	clearTimeout(this.timer)
  	}

  	render() {
	    return (
	      <Animated.Image
	        style={{
	          width: maxWidth,
	          height: maxHeight,
	          transform: [{ scale: this.state.bounceValue }]
	        }}
	        source={splashImg}
	      />
	    )
  	}
}