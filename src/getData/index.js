export default async function getDeviceData(setTest) {
    let url = 'https://api.mocki.io/v1/335b9fd3'
    let response = await fetch(url, {
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    });

    if (response.ok) {
        await sortDeviceData(response, setTest);
    } else {
        alert("Ошибка HTTP: " + response.status);
    }
}

async function sortDeviceData(response, setTest) {
    await response.json().then(function (data) {
        console.log(data.device.id)

        switch (data.device.type) {
            // WIFI Smart Socket
            case 'WS1':
                setTest(data.device.id);
                break;
            // BT Монитор температуры и влажности
            case 'TH1BT':
                setTest(data.device.id);
                break;
            // WIFI Smart convector
            case 'WSC31':
                setTest(data.device.id);
                break;
        }


    });
}
