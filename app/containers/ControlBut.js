 'use strict'
import React, {Component} from 'react'
import { Platform,
StyleSheet,
  View,
  Text, 
  Image,
  TouchableHighlight  
} from 'react-native'

export default class ControlBut extends Component{
	constructor(props) {
      super(props)
      this.state = {
      }
  	} 

  	render() {
  		return(
  			<View style={{flexDirection: 'row'}}>
	              <TouchableHighlight
	                  ref='button'
	                  underlayColor='transparent'
	                  onPress={()=>{
	                  }}>
	                  <View style={{padding:5}}>
	                  	<Text style={{color: '#fff',fontSize: 16,lineHeight: 24}}>编辑</Text>
	                  </View>
	              </TouchableHighlight>
	              <TouchableHighlight
		            ref='moreMenuButton'
		            underlayColor='transparent'
		            style={{padding:5}}
		            onPress={() => {

		            }}>
		            <View style={{paddingRight:8}}>
		                <Image
		                    style={{width: 24, height: 24, marginLeft: 5}}
		                    source={require('../../resources/img/add.png')}
		                />
		            </View>
		        </TouchableHighlight>
            </View>
  		)
  	}
}