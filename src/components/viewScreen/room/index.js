import React, {useState} from "react";
import getDeviceData from "../../../getData";
import Device from "./device";


export default function Room() {
    const [test, setTest] = useState()
    return (
        <div>
            {test}
            <button onClick={() => {getDeviceData(setTest)}}>
                Test
            </button>
            <Device>
                {<div>123</div>}
            </Device>
        </div>
    );
}
