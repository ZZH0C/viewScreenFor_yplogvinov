import React, {useState} from "react";

async function getData(setTest) {
    let url = 'https://api.mocki.io/v1/335b9fd3'
    let response = await fetch(url, {
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    });

    if (response.ok) {
        await sortData(response, setTest);
    } else {
        alert("Ошибка HTTP: " + response.status);
    }
}

async function sortData(response, setTest) {
    await response.json().then(function (data) {
        console.log()
        console.log(data.device.id)

        switch (Object.keys(data)[0]) {
            case 'device':
                setTest(data.device.id);
                break;
            case 'devices':
                console.log(Object.keys(data)[0]);
                break;
            case 'Residentials':
                console.log(Object.keys(data)[0]);
                break;
        }


    });
}


export default function ViewScreen() {

    const [test, setTest] = useState(0)
    return (
        <div className={'view-screen_container'}>
            {test}
            <button
                onClick={() => {
                    getData(setTest)
                }}
            >
                Test
            </button>
        </div>
    );
}
