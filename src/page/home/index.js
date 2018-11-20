/**
 * homeKit
 * 首页
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
}from 'react-native';
import { PricingCard,} from 'react-native-elements';
import {inject, observer} from "mobx-react/native";

@inject('rootStore')
@observer
export default class Index extends Component {
    constructor(props) {
        super(props)
        this.state ={
        }
    }

    render() {
        return(
            <View style={styles.container}>
                <PricingCard
                    color={this.props.rootStore.themeStore.data.themeBackgroundColor}
                    title='温度'
                    price='27℃'
                    info={[]}
                    button={{ title: '刷新' }}
                    containerStyle={{width:'45%', height: '40%', marginRight: 0, borderWidth: 0, borderTopLeftRadius: 5, borderBottomLeftRadius: 5,}}
                    titleStyle={{fontSize: 16}}
                    pricingStyle={{fontSize: 11, color: '#232432'}}
                    wrapperStyle={{fontSize: 12}}
                />
                <PricingCard
                    color={this.props.rootStore.themeStore.data.themeBackgroundColor}
                    title='湿度'
                    price='23℃'
                    info={[]}
                    button={{ title: '刷新' }}
                    containerStyle={{width:'45%',height: '40%', marginLeft: 0, borderWidth: 0, borderTopRightRadius: 5, borderBottomRightRadius: 5,}}
                    titleStyle={{fontSize: 16}}
                    pricingStyle={{fontSize: 11}}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex : 1,
        flexDirection: 'row',
    },
});