'use strict'
const authStore = {
	isLogin: false,
	uid: "",
	pwd: "",
    Authorization: null,
    lastRequestDate: "",
	expire: 0,
	host: "",
	port: "",
}

export default authStore