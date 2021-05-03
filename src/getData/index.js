import * as residentials_data from  '../testing/room-index.json'
import * as devices_data from '../testing/dev-index.json'
import * as device_1 from '../testing/AB0FD1DDE5F000.json'
import * as device_2 from '../testing/AB0FD1DDE5F101 (1).json'
import * as device_3 from '../testing/AB0F12D1E51102 (1).json'

// export async function getDeviceData(setDeviceData,id) {
//     let url = `../devices/${id}`
//
//     let response = await fetch(url, {
//         headers: {
//             'Content-Type': 'application/json',
//             'Accept': 'application/json'
//         }
//     });
//
//     if (response.ok) {
//         await sortDeviceData(response, setDeviceData);
//     } else {
//         alert("Ошибка HTTP: " + response.status);
//     }
// }

export function getDeviceData_test() {
    return [device_1.default,device_2.default,device_3.default]
}

export  function getResidentialData_test(){
    return residentials_data.default
}

export  function getDeviceList_test(){
    return devices_data.default
}

// async function sortDeviceData(response, setDeviceData) {
//     await response.json().then(function (data) {
//         switch (data.device.type) {
//             // WIFI Smart Socket
//             case 'WS1':
//                 setTest(data.device.id);
//                 break;
//             // BT Монитор температуры и влажности
//             case 'TH1BT':
//                 setTest(data.device.id);
//                 break;
//             // WIFI Smart convector
//             case 'WSC31':
//                 setTest(data.device.id);
//                 break;
//         }
//
//
//     });
// }

// export async function getResidentialData(setResidentialData){
//     let url = 'https://api.mocki.io/v1/335b9fd3'
//
//     let response = await fetch(url, {
//         headers: {
//             'Content-Type': 'application/json',
//             'Accept': 'application/json'
//         }
//     });
//
//     if (response.ok) {
//         await response.json().then(function (data) {
//             setResidentialData(data)
//         });
//
//     } else {
//         alert("Ошибка HTTP: " + response.status);
//     }
// }
//
// export async function getDeviceList(setDeviceList){
//     let url = 'https://api.mocki.io/v1/335b9fd3'
//     let response = await fetch(url, {
//         headers: {
//             'Content-Type': 'application/json',
//             'Accept': 'application/json'
//         }
//     });
//     if (response.ok) {
//         await response.json().then(function (data) {
//             setDeviceList(data)
//         });
//
//     } else {
//         alert("Ошибка HTTP: " + response.status);
//     }
// }

// export {getDeviceData,getResidentialData,getDeviceList}
export default {getDeviceData_test,getDeviceList_test,getResidentialData_test}
