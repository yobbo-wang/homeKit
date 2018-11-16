/**
 * yobboKit
 * 程序入口
 * @author yobbo
 * @date 2018-04-01
 * @email yobbo_wang@163.com
 * @copyright Copyright © 2016 yobbo
 */
'use strict'
import React, {Component} from 'react'
import App from './containers/App'
import Login from './page/login/index' 
import { Provider } from 'react-redux'
import rootStore from '../mox/rootStore'

export default class setup extends Component{
    constructor(props) {
        super(props)
        this.state = {
        }
    }    

    componentDidMount() {
    }    

    render() {
        console.log(rootStore)
        return (
            <Provider rootStore={rootStore}>
                <Login />
            </Provider>
        )
    }
}
