/**
 * homeKit
 * 控制组件入口
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
    TouchableHighlight
}from 'react-native'
import { inject, observer } from 'mobx-react/native'

@inject('rootStore')
@observer
class ControlContainer extends Component {
    constructor(props) {
        super(props)
        this.state ={
        }
    }

    static navigationOptions = ({ navigation, screenProps}) => {
        const themeColor = screenProps.themeBackgroundColor;
        return {
            title: '控制',
            headerStyle:{
                backgroundColor: themeColor
            },
            tabBarLabel: ({ tintColor, fontSize}) => (
                <Text style={[{color: tintColor == '#999999' ? tintColor : themeColor}, styles.tabBarLabelText]}>控制</Text>
            ),
            tabBarIcon: ({ tintColor }) => (
                <Image style={{width: 26, height: 26,resizeMode: 'contain',
                    tintColor: tintColor == '#999999' ? tintColor : themeColor }}
                       source={require('../../resources/img/ic_my.png')} />
            ),
        }
    }

    render() {
        console.log(this.props.rootStore)
        return (
            <Text>home</Text>
        )
    }

}

const styles = StyleSheet.create({
    tabBarLabelText: {
        marginBottom: 1.5,
        fontSize: 10,
        textAlign: 'center',
        backgroundColor: 'transparent'
    }
})

export default (ControlContainer)
