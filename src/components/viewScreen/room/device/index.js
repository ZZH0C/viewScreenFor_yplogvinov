import React from "react";
import PropTypes from 'prop-types';

export default function Device(props) {
    return (
        <div>
            {props.children}
        </div>
    );
}

Device.propTypes = PropTypes.any.isRequired;
