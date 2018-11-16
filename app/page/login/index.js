/**
 * yobboKit
 * 登录客户端页面
 * @author yobbo
 * @date 2018-04-01
 * @email yobbo_wang@163.com
 * @copyright Copyright © 2016 yobbo
 */
 'use strict'
import React from 'react'
import { Button,} from 'react-native-elements'
import { 
	ScrollView, 
	TextInput, 
	TouchableOpacity, 
	View,
	Text,
	StyleSheet,
	Image, 
} from 'react-native'
import { inject, observer } from 'mobx-react/native'
// import { withNavigation } from 'react-navigation'

@observer
@inject('store')
class Login extends React.Component {
	constructor(props) {
    	super(props)
	    this.state = {
	      uid: '',
	      pwd: '',
    	}
  	}

  	onChangeUsername = (uid) => {
    	this.setState({ uid })
  	}

	onChangePassword = (pwd) => {
	   this.setState({ pwd })
	}

	async onBlur(type) {

	}

	async onLogin() {

	}

	render() {
		const buttonDisabled = this.state.uid.length == 0 || this.state.pwd.length == 0
		return (
	      <ScrollView contentContainerStyle={styles.container} >
	        <Image source={require('../../../resources/img/life.jpeg')} style={styles.logo} resizeMode='contain'/>
	        	<View style={styles.hostInfo}>
	        		<TextInput
	        		  style={{...styles.InputComon, ...styles.Input60}}
			          blurOnSubmit
			          keyboardType='numeric'
			          maxLength={13}
			          autoFocus
			          placeholder='客户端地址'
			          onChangeText={this.onChangeUsername}
			          onBlur={() => this.onBlur('uid')}
			        />
			        <TextInput 
			        style={{...styles.InputComon, ...styles.Input30}}
					  blurOnSubmit
			          keyboardType='numeric'
			          maxLength={13}
			          autoFocus
			          placeholder='端口'
			          onChangeText={this.onChangeUsername}
			          onBlur={() => this.onBlur('uid')}
			        />
	        	</View>
		        <TextInput
		          style={{...styles.Input100, ...styles.InputComon}}
		          blurOnSubmit
		          keyboardType='numeric'
		          maxLength={13}
		          autoFocus
		          placeholder='客户端UID'
		          onChangeText={this.onChangeUsername}
		          onBlur={() => this.onBlur('uid')}
		        />
		        <TextInput
		          style={{...styles.InputComon, ...styles.Input100}}
		          blurOnSubmit
		          secureTextEntry
		          placeholder='客户端PWD'
		          onChangeText={this.onChangePassword}
		          onBlur={() => this.onBlur('pwd')}
		        />
		        <Button
				  title='接入'
				  backgroundColor='rgb(96, 165, 246)'
				  loading={false}
				  borderRadius={5}
				  buttonStyle={{width: '100%', height: 50,}}
				  containerViewStyle={{width: '100%'}}
				   />
	        	<Text style={styles.note}>接入智能管家可以玩转各种家电设备</Text>
	      </ScrollView>
    	)
	}
}

export default Login

const textInputBackgroundColor = '#fff'
const textInputBorderColor = 'rgba(200, 199, 204, 0.5)'
const noteTextColor = 'rgb(200, 199, 204)'
const buttonBackgroundColor = 'rgb(96, 165, 246)'
const buttonDisabledBackgroundColor = 'rgba(96, 165, 246, 0.5)'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    paddingLeft: 21,
    paddingRight: 21,
  },
  logo: {
    width: 130,
    height: 130,
    marginTop: 30,
    marginBottom: 30,
    alignItems: 'center',
  },
  hostInfo:{
  	flexDirection: 'row',
  	flexWrap:'wrap',
    justifyContent:'center',
    alignItems:'center'
  },
  InputComon: {
	height: 50,
    backgroundColor: textInputBackgroundColor,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: textInputBorderColor,
  },
  Input100: {
    width: '100%',
    borderRadius: 5,
    paddingLeft: 15,
    paddingRight: 5,
  },
  Input60: {
	width: '60%',
	borderRadius: 5,
    paddingLeft: 15,
  },
  Input30: {
	width: '30%',
	borderRadius: 5,
	paddingLeft: 15,
	marginLeft: '6%'
  },
  Button: {
    width: '100%',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: buttonBackgroundColor,
    borderRadius: 5,
  },
  buttonText: {
    color: textInputBackgroundColor,
    fontSize: 15,
  },
  buttonDisabled: {
    backgroundColor: buttonDisabledBackgroundColor,
  },
  note: {
    position: 'absolute',
    bottom: 20,
    fontSize: 12,
    color: noteTextColor,
  },
})
