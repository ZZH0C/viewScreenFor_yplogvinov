import React from "react";
import PropTypes from 'prop-types';


export default function Device(props) {

console.log(props)
    return (
        <div className={'device_container'}>
            {props.props.device.deviceId}
        </div>
    );
}

Device.propTypes = PropTypes.any.isRequired;
