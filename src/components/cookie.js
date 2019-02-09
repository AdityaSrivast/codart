let cookie = '';
let Cookie = {
	getCookie: (key) => {
    //   var keyValue = document.cookie.match('(^|;) ?' + key + '=([^;]*)(;|$)');
    //     return keyValue ? keyValue[2] : null;
        return cookie;
    },
    setCookie: (key, value) => {
    	// const date = new Date();
        // date.setHours(date.getHours() + 24*365*2);
        // document.cookie = `${key}=${value};expires=${date.toGMTString()};path=/`;
        cookie = value;
    },
    deleteCookie: (name) => {
    	cookie = '';
    }
}

export default Cookie;
