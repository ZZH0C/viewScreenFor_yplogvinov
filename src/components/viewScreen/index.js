import React from "react";
import Room from "./room";
import {getResidentialData_test, getDeviceData_test} from "../../getData";
import {Tabs, Tab, Accordion, Card, Button} from "react-bootstrap";
// import 'bootstrap/dist/css/bootstrap.min.css';

export default function ViewScreen() {

    const resident = getResidentialData_test()

    let devices = [];
    const rooms = [];
    devices = getDeviceData_test()

    resident.Residentials[0].rooms.forEach((currentRoom) => {
        let roomDevices = []

        devices.forEach(currentDevice => {
            if (currentDevice.device.roomId === currentRoom.roomId) {
                roomDevices.push(currentDevice)
            }
        })
        rooms.push({
            devices: roomDevices,
            room: currentRoom
        })
    })

    const roomView = rooms.map((elem) =>
        <Tab key={elem.room.roomId} eventKey={elem.room.roomId} title={elem.room.name}>
            <Room props={elem}/>
        </Tab>
    );



    return (
        <div className={'view-screen_container'}>
            <Accordion>
                <Card>
                    <Card.Header>
                        <Accordion.Toggle as={Button} variant="link" eventKey="0">
                            {resident.Residentials[0].Address}
                        </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="0">
                        <Card.Body>
                            <Tabs defaultActiveKey={rooms[0].room.roomId}>
                                {roomView}
                            </Tabs>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
                {/*<Card>*/}
                {/*    <Card.Header>*/}
                {/*        <Accordion.Toggle as={Button} variant="link" eventKey="1">*/}
                {/*            Click me!*/}
                {/*        </Accordion.Toggle>*/}
                {/*    </Card.Header>*/}
                {/*    <Accordion.Collapse eventKey="1">*/}
                {/*        <Card.Body>Hello! I'm another body</Card.Body>*/}
                {/*    </Accordion.Collapse>*/}
                {/*</Card>*/}
            </Accordion>

            {/*<h1>{resident.Residentials[0].Address}</h1>*/}
            {/*<Tabs defaultActiveKey={rooms[0].room.roomId}>*/}
            {/*    {roomView}*/}
            {/*</Tabs>*/}
        </div>
    );
}


