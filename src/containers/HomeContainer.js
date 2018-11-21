/**
 * learnBestTools
 * 首页入口组件
 * @author yobbo
 * @date 2018-04-01
 * @email yobbo_wang@163.com
 * @copyright Copyright © 2016 yobbo
 */
 'use strict';
import React, {Component} from 'react';
import { 
	StyleSheet,
	View, 
	Text, 
	Image,
  TouchableHighlight 
}from 'react-native';
import { Icon,} from 'react-native-elements';
import { inject, observer } from 'mobx-react/native';

import Index from '../page/home/index'

@inject('rootStore')
@observer
class HomeContainer extends Component {
    constructor(props) {
        super(props)
        this.state ={
        }
    }

    static navigationOptions = ({ navigation, screenProps}) => {
        const themeColor = screenProps.themeBackgroundColor;
        return {
            title: '家',
            headerStyle:{
                backgroundColor: themeColor
            },
            tabBarLabel: ({ tintColor, fontSize}) => (
                <Text style={[{color: tintColor == '#999999' ? tintColor : themeColor}, styles.tabBarLabelText]}>家</Text>
            ),
            tabBarIcon: ({ tintColor }) => (
                <Image style={{width: 26, height: 26,resizeMode: 'contain',
                    tintColor: tintColor == '#999999' ? tintColor : themeColor }}
                       source={require('../../resources/img/ic_home.png')} />
            ),
            headerRight: (
                <Icon
                    name='ios-settings'
                    type='ionicon'
                    color='#fff'
                    containerStyle={{padding: 8}}
                    onPress={() => {
                        navigation.navigate('Theme');
                    }} />
            )
        }
    };

    render() {
        return (
            <Index />
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

export default (HomeContainer)
