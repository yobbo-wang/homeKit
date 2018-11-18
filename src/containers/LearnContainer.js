/**
 * learnBestTools
 * 学习版块入口组件
 * @author yobbo
 * @date 2018-04-01
 * @email yobbo_wang@163.com
 * @copyright Copyright © 2016 yobbo
 */
'use strict'
import React, {Component} from 'react'
import { 
	StyleSheet,
	View, 
	Text, 
	Image,
	TouchableHighlight, 
}from 'react-native'
import { inject, observer } from 'mobx-react/native'

@inject('rootStore')
@observer
class LearnContainer extends Component {
	constructor(props) {
        super(props)
        this.state ={
        }
    } 

    static navigationOptions = ({ navigation, screenProps }) => ({
	    title: '学习',
        headerStyle:{
            backgroundColor: '#342343',
            borderBottomColor: '#342343',
        },
        tabBarLabel: ({ tintColor, fontSize}) => (
            <Text style={[{color: tintColor == '#999999' ? tintColor : '#342343'}, styles.tabBarLabelText]}>学习</Text>
        ),
  	})

    render() {
    	return (
            <Text >learn</Text>
        )
  	}

}	

const styles = StyleSheet.create({
    tabBarLabelText: {
        marginBottom: 1.5, 
        fontSize: 10,
        textAlign: 'center',
        backgroundColor: 'transparent',
    }
})

export default LearnContainer