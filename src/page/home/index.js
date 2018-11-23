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
    ScrollView,
    Text,
    Platform,
    RefreshControl,
} from 'react-native';

import {inject, observer} from "mobx-react/native";
import fonts from "react-native-elements/src/config/fonts";

@inject('rootStore')
@observer
export default class Index extends Component {
    constructor(props) {
        super(props);
        this.state ={
            isLoading: false,
        }
    }

    _onRefresh() {

    }

    render() {
        return(
            <ScrollView style={styles.container}
                refreshControl={
                    <RefreshControl
                        refreshing = {this.state.isLoading}
                        onRefresh = {() => this._onRefresh()}
                        tintColor = {this.props.rootStore.themeStore.data.themeBackgroundColor}
                        title = "数据同步中..."
                        titleColor = {this.props.rootStore.themeStore.data.themeBackgroundColor}
                        colors = {[this.props.rootStore.themeStore.data.themeBackgroundColor,
                           '#323212',
                            this.props.rootStore.themeStore.data.themeBackgroundColor]}
                    />
                }
            >
                <View style={styles.ViewContainer}>
                    <View style=style={[{borderRightWidth: 1,
                        borderRightColor: '#f3f3f3',backgroundColor: '#28a745'},styles.ViewWapper]}>
                        <Text style={[{color: '#fff'},styles.CustomTitle]}>温度</Text>
                        <Text style={styles.pricingPrice}>27℃</Text>
                        <Text style={styles.pricingPrice}>适宜</Text>
                    </View>
                    <View style={[{borderRightWidth: 1,
                        borderRightColor: '#f3f3f3',backgroundColor: '#FFD700'},styles.ViewWapper]}>
                        <Text style={[{color: '#fff'},styles.CustomTitle]}>湿度</Text>
                        <Text style={styles.pricingPrice}>27℃</Text>
                        <Text style={styles.pricingPrice}>潮湿</Text>
                    </View>
                    <View style={[{borderRightWidth: 1,
                        borderRightColor: '#f3f3f3',},styles.ViewWapper]}>
                        <Text style={[{color: this.props.rootStore.themeStore.data.themeBackgroundColor},styles.CustomTitle]}>湿度</Text>
                        <Text style={styles.pricingPrice}>27℃</Text>
                    </View>
                    <View style={[{borderRightWidth: 1,
                        borderRightColor: '#f3f3f3',},styles.ViewWapper]}>
                        <Text style={[{color: this.props.rootStore.themeStore.data.themeBackgroundColor},styles.CustomTitle]}>湿度</Text>
                        <Text style={styles.pricingPrice}>27℃</Text>
                    </View>
                </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex : 1,
    },
    ViewContainer: {
        flexDirection: "row",
        margin: 15,
        marginBottom: 15,
        backgroundColor: 'white',
        borderRadius: 5,
    },
    CustomTitle: {
        textAlign: 'center',
        fontSize: 18,
        ...Platform.select({
            ios: {
                fontWeight: '800',
            },
            android: {
                ...fonts.android.black,
            },
        }),
    },
    pricingPrice: {
        textAlign: 'center',
        marginTop: 5,
        // fontSize: 16,
        color: '#fff',
        ...Platform.select({
            ios: {
                fontWeight: '500',
            },
            android: {
                ...fonts.android.bold,
            },
        }),
    },
    ViewWapper: {
        backgroundColor: 'transparent',
        width: '50%',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        padding: 15,
    },
    ViewTwo: {
        backgroundColor: '#532267',
        width: '50%',
        alignItems: 'center',
        justifyContent: 'center',
        flex:1,
    }
});