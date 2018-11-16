'use strict'
const authStore = {
	isLogin: false,
	uid: "",
	pwd: "",
    Authorization: "",
    lastRequestDate: "",
	expire: 0,
	host: "",
	port: "",
}

export default authStore