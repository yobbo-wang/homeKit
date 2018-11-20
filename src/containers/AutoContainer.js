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
class AutoContainer extends Component {
	constructor(props) {
        super(props)
        this.state ={
        }
    } 

    static navigationOptions = ({ navigation, screenProps }) => {
        const themeColor = screenProps.themeBackgroundColor;
        return {
            title: '自动化',
            headerStyle:{
                backgroundColor: themeColor,
                borderBottomColor: themeColor,
            },
            tabBarLabel: ({ tintColor, fontSize}) => (
                <Text style={[{color: tintColor == '#999999' ? tintColor : themeColor}, styles.tabBarLabelText]}>自动化</Text>
            ),
            tabBarIcon: ({ tintColor }) => (
                <Image style={{width: 26, height: 26,resizeMode: 'contain',
                    tintColor: tintColor == '#999999' ? tintColor : themeColor }}
                       source={require('../../resources/img/ic_auto.png')} />
            ),
        }
  	};

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

export default AutoContainer