// let cookie = '';
// import {session} from 'electron';
const  electron  = window.require('electron');
const {session} = electron.remote;

let Cookie = {
	getCookie: (key) => {
    //   var keyValue = document.cookie.match('(^|;) ?' + key + '=([^;]*)(;|$)');
        // return keyValue ? keyValue[2] : null;

        // session.defaultSession.cookies.get({ path: '/', name: key }, (error, cookies) => {
            // console.log(error, cookies);
        // });

        
    },
    setCookie: (key, value) => {
    	// const date = new Date();
        // date.setHours(date.getHours() + 24*365*2);
        // document.cookie = `${key}=${value};expires=${date.toGMTString()};path=/`;

        // const cookie = { path: '/', name: key, value: value }
        // session.defaultSession.cookies.set(cookie, (error) => {
            // if (error) console.error(error)
        // });
    },
    deleteCookie: (name) => {
        // const date = new Date();
        // date.setHours(date.getHours() - 24*365*2);
        // document.cookie = `${name}=;expires=${date.toGMTString()};path=/`;

    	// session.defaultSession.cookies.remove({name: name});
    }
}

export default Cookie;
