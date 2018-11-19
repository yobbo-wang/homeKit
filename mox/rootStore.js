/*
* 状态机控制
*/
'use strict'
import { observable, action } from 'mobx';
import { AsyncStorage } from 'react-native';
import Storage from "react-native-storage";
import { ToastStyles } from 'react-native-toaster';

import authStore from './authStore';
import machineStore from './machineStore';
import themeStore from './themeStore';
import themeFactory, {ThemeFlags} from '../resources/styles/themeFactory';

// init storage
const storage = new Storage({
  size: 1000,
  defaultExpires: 1000 * 1800, // 30分钟
  storageBackend: AsyncStorage,
  enableCache: true,
});

class store{
	constructor() {
		this.storageStore = new StorageController;
		this.authStore = new AuthController(authStore, this);
		this.machineStore = new MachineController(machineStore, this);
		this.themeStore = new ThemeController(themeStore, this);
	}
}

class ThemeController {
    @observable data = {};
    constructor(data, rootStore) {
        this.data = data;
        this.rootStore = rootStore;
        this._loadTheme();
    }

	_loadTheme = async () => {
        let themeFlags = await AsyncStorage.getItem('ThemeFlags');
		if(!themeFlags){
            themeFlags = "Default";
		}
		const theme = themeFactory.createTheme(ThemeFlags[themeFlags].color);
		this.changeTheme(theme);
	}

    @action changeTheme(data) {
        return this.data = {...this.data, ...data}
    }

}

class AuthController {
	@observable data = {}

	constructor(data, rootStore) {
    	this.data = data
    	this.rootStore = rootStore
  	}

  	@action setValue(options){
  		this.data = {...this.data, ...options}
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

	@observable data = {};

	constructor(data, rootStore) {
    	this.data = data;
    	this.rootStore = rootStore;
  	}

	@action static async save(key, data, expires) {
		return await storage.save({ key, data, expires });
	}

	// load
	@action static async load(key) {
		let data = await AsyncStorage.getItem(key);
		data = data ? JSON.parse(data) : null;
		if (data && data.expires > new Date().getTime()) {
			return data.rawData;
		}else if(data && data.expires < new Date().getTime()){
			this.remove(key);
		}
        return null;
	}

	@action static async remove(key) {
		return await storage.remove({ key });
	}

}

// machine
class MachineController {
	@observable data = {}

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

    // getApiState
    @action
    async getApiState(url, options) {
        const Header = {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
				'Authorization': 'Bearer ' + options.authorization
            }
        }
        try {
            const response = await fetch(url, Header)
            return await response.json()
        } catch (err) {
            await this.toast('error', '请重新登录')
            await this.clearToast();
        }
    }
}

export default new store()