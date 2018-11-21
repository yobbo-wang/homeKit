/**
 * learnBestTools
 * 自定义主题颜色
 * @author yobbo
 * @date 2018-04-01
 * @email yobbo_wang@163.com
 * @copyright Copyright © 2016 yobbo
 */
'use strict'
import React, {Component} from "react";
import {
    StyleSheet,
    View,
    Image,
    Text,
    Platform,
    ScrollView,
    Modal,
    TouchableHighlight,
    Dimensions
} from "react-native";
import { inject, observer } from 'mobx-react/native';
import { Icon,} from 'react-native-elements';

import ThemeFactory, {ThemeFlags} from "../../resources/styles/themeFactory";
import  {isIPhoneX} from '../util/CheckSafeViewUtil';
const width = Dimensions.get('window').width;

@inject('rootStore')
@observer
export default class CustomTheme extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    static navigationOptions = ({ navigation, screenProps}) => {
        const themeColor = screenProps.themeBackgroundColor;
        return {
            title: '主题颜色',
            headerStyle:{
                backgroundColor: themeColor
            },
        }
    };

    async onSelectTheme(themeKey) {
        await this.props.rootStore.storageStore.constructor.save("ThemeFlags", themeKey, null);
        this.props.rootStore.themeStore.changeTheme({themeBackgroundColor: ThemeFlags[themeKey].color});
    }

    renderCustomThemeView() {
        return (
            <ScrollView style = {styles.modalContainer}>
                {this.renderThemeItems()}
            </ScrollView>
        )
    }

    getThemeItem(themeKey) {
        return (
            <TouchableHighlight
                style={{flex: 1}}
                underlayColor='white'
                onPress={()=>this.onSelectTheme(themeKey)}>
                <View style={[{backgroundColor: ThemeFlags[themeKey].color}, styles.themeItem]}>
                    <Text style={styles.themeText}>{ThemeFlags[themeKey].key}</Text>
                </View>
            </TouchableHighlight>
        )
    }

    renderThemeItems() {
        let views = [];
        for (let i = 0, keys = Object.keys(ThemeFlags), l = keys.length; i < l; i += 4) {
            let key1 = keys[i], key2 = keys[i + 1], key3 = keys[i + 2], key4 = keys[i + 3];
            views.push(<View key={i} style={{flexDirection: 'row'}}>
                {this.getThemeItem(key1)}
                {this.getThemeItem(key2)}
                {this.getThemeItem(key3)}
                {this.getThemeItem(key4)}
            </View>)
        }
        return views
    }

    render() {
        return(
            <View style={styles.listView_container}>
                {this.renderCustomThemeView()}
            </View>
        )
    }

}

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        padding: 10,
        marginBottom: isIPhoneX ? 34 : 5,
        backgroundColor: 'white',
        borderRadius: 3,
        shadowColor: 'gray',
        shadowOffset: {width: 2, height: 2},
        shadowOpacity: 0.5,
        shadowRadius: 2,
    },
    themeItem: {
        flex: 1,
        height: (width - 40 - 24) / 3,
        margin: 3,
        padding: 3,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center'
    },
    themeText: {
        color: 'white',
        fontWeight: '500',
        fontSize: 16,
    },
    listView_container:{
        flex: 1,
        backgroundColor: '#f3f3f4',
    },
});