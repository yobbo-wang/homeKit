import React from 'react';
import { Button,} from 'react-native-elements';
import {
    StyleSheet,
    View,
    ScrollView,
    TextInput,
    Text,
    Image,
    StatusBar
} from 'react-native';
import { inject, observer } from 'mobx-react/native'

@inject('rootStore')
@observer
class SignInScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            uid: '',
            pwd: '',
        }
    }

    static navigationOptions = ({ navigation, screenProps}) => {
        const themeColor = screenProps.themeBackgroundColor;
        return {
            title: '登录',
            headerStyle:{
                backgroundColor: themeColor
            },
            tabBarLabel: ({ tintColor, fontSize}) => (
                <Text style={[{color: tintColor == '#999999' ? tintColor : themeColor}, styles.tabBarLabelText]}>登录</Text>
            ),
            headerTitleStyle: {
                color: '#fff',
                fontSize: 20,
                alignSelf: 'center',
                alignItems: 'center',
            },
            headerTintColor: '#fff'
        }
    };

    onChangeUsername = (uid) => {
        this.setState({ uid })
    };

    onChangePassword = (pwd) => {
        this.setState({ pwd })
    };

    async onBlur(type) {

    }

    async onLogin() {

    }

    render() {
        const buttonDisabled = this.state.uid.length == 0 || this.state.pwd.length == 0
        return (
            <ScrollView contentContainerStyle={styles.container} >
                <StatusBar
                    backgroundColor={'#fff'}
                    barStyle={'light-content'} />
                <View style={styles.hostInfo}>
                    <TextInput
                        style={styles.Input60}
                        blurOnSubmit
                        keyboardType='numeric'
                        maxLength={13}
                        autoFocus
                        placeholder='客户端地址'
                        onChangeText={this.onChangeUsername}
                        onBlur={() => this.onBlur('host')}
                    />
                    <TextInput
                        style={styles.Input30}
                        blurOnSubmit
                        keyboardType='numeric'
                        maxLength={8}
                        autoFocus
                        placeholder='端口'
                        onChangeText={this.onChangeUsername}
                        onBlur={() => this.onBlur('port')}
                    />
                </View>
                <TextInput
                    style={styles.Input100}
                    blurOnSubmit
                    keyboardType='numeric'
                    maxLength={13}
                    autoFocus
                    placeholder='客户端UID'
                    onChangeText={this.onChangeUsername}
                    onBlur={() => this.onBlur('uid')}
                />
                <TextInput
                    style={styles.Input100}
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
                    borderRadius={25}
                    buttonStyle={{width: '100%', height: 50,}}
                    containerViewStyle={{width: '100%'}}
                    onPress={this._signInAsync}
                />
                <Text style={styles.note}>智能管家一切尽在指尖</Text>
            </ScrollView>
        );
    }

    _signInAsync = async () => {
        await this.props.rootStore.storageStore.constructor.save("Authorization", 'AAAAAAAAA', 60 * 1000);
        this.props.navigation.navigate('App');
    };
}

export default SignInScreen;

const textInputBackgroundColor = '#fff';
const textInputBorderColor = 'rgba(200, 199, 204, 0.5)';
const noteTextColor = 'rgb(200, 199, 204)';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        paddingLeft: 21,
        paddingRight: 21,
        marginTop: 25,
    },
    hostInfo:{
        flexDirection: 'row',
        flexWrap:'wrap',
        justifyContent:'center',
        alignItems:'center'
    },
    Input100: {
        width: '100%',
        borderRadius: 5,
        paddingLeft: 15,
        paddingRight: 5,
        height: 50,
        backgroundColor: textInputBackgroundColor,
        marginBottom: 15,
        borderWidth: 1,
        borderColor: textInputBorderColor,
    },
    Input60: {
        width: '60%',
        borderRadius: 5,
        paddingLeft: 15,
        height: 50,
        backgroundColor: textInputBackgroundColor,
        marginBottom: 15,
        borderWidth: 1,
        borderColor: textInputBorderColor,
    },
    Input30: {
        width: '30%',
        borderRadius: 5,
        paddingLeft: 15,
        marginLeft: '6%',
        height: 50,
        backgroundColor: textInputBackgroundColor,
        marginBottom: 15,
        borderWidth: 1,
        borderColor: textInputBorderColor,
    },
    note: {
        marginTop: 30,
        fontSize: 12,
        color: noteTextColor,
    },
});