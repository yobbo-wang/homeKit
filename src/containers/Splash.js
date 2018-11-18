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
import {
    Dimensions,
    Animated,
    AsyncStorage,
} from 'react-native'
import SplashScreen from 'react-native-splash-screen'

const maxHeight = Dimensions.get('window').height
const maxWidth = Dimensions.get('window').width
const splashImg = require('../../resources/img/splash.png') //TODO上线后，动态更改启动图

import { inject, observer } from 'mobx-react/native'

@inject('rootStore')
@observer
export default class Splash extends Component{
    static navigationOptions = {
        header: null
    }

    constructor(props) {
        super(props);
        this.state = {
            bounceValue: new Animated.Value(1)
        };
    }

     componentDidMount() {
        Animated.timing(this.state.bounceValue, {
            toValue: 1.2,
            duration: 1000
        }).start();
        SplashScreen.hide();
        setTimeout(async ()=> {
            try{
                const Authorization = await this.props.rootStore.storageStore.constructor.load("Authorization");
                this.props.rootStore.authStore.setValue({ Authorization });
                this.props.navigation.navigate(Authorization ? 'App' : 'Auth');
            }catch (error){
                this.props.navigation.navigate('Auth');
            }
        }, 1000);
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