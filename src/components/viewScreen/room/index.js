import React from "react";
import Device from "./device";
import PropTypes from "prop-types";

export default function Room(props) {

    const deviceView = props.props.devices.map((elem) =>
        <Device key={elem.device.deviceId} props={elem}/>
    );

    return (
        <div className={'room_container'}>
            <span>{props.props.room.name}</span>
            <div>
                {deviceView}
            </div>
        </div>
    );
}


Room.propTypes = PropTypes.any.isRequired;
