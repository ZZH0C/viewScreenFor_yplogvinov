import React, {useState} from "react";

async function getData() {
    let url = 'https://api.mocki.io/v1/335b9fd3'
    let response = await fetch(url, {
        headers : {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }

    });

    if (response.ok) {
        return await response.json();
    } else {
        alert("Ошибка HTTP: " + response.status);
    }
}


export default function ViewScreen() {

    const [test, setTest] = useState(0)
    return (
        <div className={'view-screen_container'}>
            {test}
            <button
                onClick={()=>{
                    getData().then((data) => setTest(data.device.id))
                }}
            >
                Test
            </button>
        </div>
    );
}
