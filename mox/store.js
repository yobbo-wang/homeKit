/*
* 状态机控制
*/
'use strict'
import { observable, action } from 'mobx'
import { AsyncStorage } from 'react-native'
import Storage from "react-native-storage"
import { ToastStyles } from 'react-native-toaster'

import authStore from './authStore'
import machineStore from './machineStore'

// init storage
const storage = new Storage({
  size: 1000, // max count
  defaultExpires: 1000 * 1800, // save 30 min
  storageBackend: AsyncStorage,
  enableCache: true,
})

class store{
	constructor() {
		this.storageStore = new StorageController
		this.authStore = new AuthController(authStore, this)
		this.machineStore = new MachineController(machineStore, this)
	}
}


class AuthController {
	@observable data = {}

	constructor(data, rootStore) {
    	this.data = data
    	this.rootStore = rootStore
  	}

  	@action
  	setValue(options){
  		this.data.isRemember = options['isRemember']
  		this.data.uid = options['uid']
  		this.data.pwd = options['pwd']
  		this.data.token = options['token']
  		this.data.expire = options['expire']
  	}

  	// login
	@action
	async login(url, options) {
		const Header = {
		  method: 'POST',
		  headers: {
		    'Accept': 'application/json',
		    'Content-Type': 'application/json',
		  },
		  body: JSON.stringify(options || {})
		}
		try {
		  const response = await fetch(url, Header)
		  return await response.json()
		} catch (err) {
		  await this.toast('error', '接入失败，请检查服务')
		  await this.clearToast();
		}
	}
}

// save an opertion storage
class StorageController {

	@observable
	data = {}

	constructor(data, rootStore) {
    	this.data = data
    	this.rootStore = rootStore
  	}

	@action
	async save(key, data) {
		return await storage.save({ key, data })
	}

	// load storage
	@action
	static async load(key) {
		return await storage.load({ key })
	}

	@action
	static async remove(key) {
		return await storage.remove({ key })
	}

}

// machine
class MachineController {
	@observable
	data = {}

	constructor(data, rootStore) {
    	this.data = data;
    	this.rootStore = rootStore;
  	}

  	// message
	@action
	toast(type, text) {
		this.data.toastMessage = {
		  text,
		  styles: ToastStyles[type],
		  duration: 1500,
		}
	}

	// clear message
	@action
	clearToast() {
		this.data.toastMessage = null;
	}
}

export default new store()