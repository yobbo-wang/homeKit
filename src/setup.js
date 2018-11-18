/**
 * learnBestTools
 * 程序入口
 * @author yobbo
 * @date 2018-04-01
 * @email yobbo_wang@163.com
 * @copyright Copyright © 2016 yobbo
 */
'use strict'
import React, {Component} from 'react'
import App from './containers/App'
import { Provider } from 'mobx-react'
import rootStore from '../mox/rootStore'

export default class setup extends Component{
    constructor(props) {
        super(props)
        this.state = {

        }
    }    

    componentDidMount() {
        // 检查更新
    }    

    render() {
        return (
            <Provider rootStore={rootStore}>
                <App />
            </Provider>
        )
    }
}
