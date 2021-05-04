import React from "react";
import Room from "./room";
import {getResidentialData_test,getDeviceData_test} from "../../getData";



export default function ViewScreen() {

    const resident = getResidentialData_test()

    let devices = [];
    const rooms = [];
    devices=getDeviceData_test()


    resident.Residentials[0].rooms.forEach((currentRoom) => {
        let roomDevices = []

        devices.forEach(currentDevice => {
            if(currentDevice.device.roomId === currentRoom.roomId){
                roomDevices.push(currentDevice)
            }
        })
        rooms.push({
            devices: roomDevices,
            room: currentRoom
        })
    })

    const roomView = rooms.map((elem) =>
        <Room key={elem.room.roomId} props={elem}/>
        );

    console.log(rooms)
    return (

        <div className={'view-screen_container'}>
            <h1>{resident.Residentials[0].Address}</h1>
            {roomView}
        </div>
    );
}


