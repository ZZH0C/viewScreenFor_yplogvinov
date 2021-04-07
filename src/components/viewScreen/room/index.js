import React, {useState} from "react";
import getDeviceData from "../../../getData";


export default function Room() {
    const [test, setTest] = useState()
    return (
        <div>
            {test}
            <button
                onClick={() => {
                    getDeviceData(setTest)
                }}
            >
                Test
            </button>
        </div>
    );
}
