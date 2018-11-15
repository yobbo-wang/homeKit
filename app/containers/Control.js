/**
 * yobboKit
 * 智能家具控制组件入口
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
  Dimensions, 
}from 'react-native'
const width = Dimensions.get('window').width
import {tabBarLabelStyles} from '../../resources/styles/com-styles.js'

class ControlContainer extends Component {
    constructor(props) {
        super(props)
        this.state ={
            
        }
    }

    render() {
    	return (
    		<View style = {styles.container}>
                <View style={styles.slide} >
                      <Image roundAsCircke={true} 
                      source={require('../../resources/img/life.jpeg')} style={styles.image} />
                  </View>
                  <View style={styles.weater}>
                    <Text style={{color: '#987867', fontSize: 16,}}>79908098098</Text>
                  </View>
            </View>
    	)
  	}

}    

const styles = StyleSheet.create({
  container: {
      padding: 5,
      flex: 1,
      backgroundColor:'#f3f3f3',
  },
  wrapper: {

  },
  slide: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor:'transparent',
  },
  image: {
    height: 140,
    width: width - 15,
    borderRadius:5,
  },
  weater: {
    height: 50,
    width: width - 15,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    marginTop: -5,
    marginLeft: 2.5,
    borderBottomLeftRadius:5,
    borderBottomRightRadius:5,
  }
})

export default ControlContainer;