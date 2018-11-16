/**
 * yobboKit
 * 首页入口组件
 * @author yobbo
 * @date 2018-04-01
 * @email yobbo_wang@163.com
 * @copyright Copyright © 2016 yobbo
 */
/*
try{
			const authStore = this.props.rootStore.authStore
            const authorization = authStore.Authorization
            const isLogin = authStore.isLogin
			if(isLogin){
            	// 发送请求验证token
				const url = "http://" + authStore.host + ":" + authStore.port + "/api/"
				const response = await this.props.rootStore.machineStore.getApiState(url, {authorization: authorization})
				if(response.code === 200){

				}
			}
        }catch (error){}
 */
 'use strict'
import React, {Component} from 'react'
import {
	View,
	Text,
}from 'react-native'

class HomeContainer extends Component {
    constructor(props) {
        super(props)
        this.state ={
            
        }
    }
    
    render() {
    	return (
    		<View>
                    <Text style={{color: '#ffffff', marginTop: 100,fontSize: 5,}}>79908098098</Text>
                  </View>
    	)
  	}

}    

export default HomeContainer