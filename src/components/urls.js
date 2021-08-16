// import React, {Component} from 'react';
// class urls extends Component {
//     render() {
//         return (

//         )
//     }
// }

// export default Urls;
const electron = window.require('electron');
const {ipcRenderer} = electron;
let port;

ipcRenderer.on('send-port', (e,port)=> {
    port = port;
    console.log(port);
});

let urls = {
    BASE_URL: port?port:'http://35.237.75.60:443',
    // BASE_URL: 'http://127.0.0.1:4000',
    // BASE_URL: 'http://192.168.43.126:4000'
    // BASE_URL: 'http://192.168.1.105:4000'
}

export default urls;
