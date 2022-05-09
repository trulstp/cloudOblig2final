const mqtt = require('mqtt');
const host = 'cloud-oblig2truls.herokuapp.com/'
const clientId = `mqtt_${Math.random().toString(16).slice(3)}`
const connectUrl = `ws://${host}`

const client = mqtt.connect(connectUrl, {
    clientId,
    clean: true,
    connectTimeout: 4000,
    username: 'test',
    password: '123',
    reconnectPeriod: 1000,
})
const message = {
    "topic": [
        {
            "stationName": "63rd Street Weather Station",
            "timestamp": "2022-05-08T08:00:00Z",
            "airTemperature": 10.7
        },
        {
            "stationName": "63rd Street Weather Station",
            "timestamp": "2022-05-08T07:00:00Z",
            "airTemperature": 10.8
        },
        {
            "stationName": "63rd Street Weather Station",
            "timestamp": "2022-05-08T06:00:00Z",
            "airTemperature": 10.4
        },
        {
            "stationName": "63rd Street Weather Station",
            "timestamp": "2022-05-08T05:00:00Z",
            "airTemperature": 10.8
        },
        {
            "stationName": "63rd Street Weather Station",
            "timestamp": "2022-05-08T04:00:00Z",
            "airTemperature": 11.5
        },
        {
            "stationName": "63rd Street Weather Station",
            "timestamp": "2022-05-08T03:00:00Z",
            "airTemperature": 10.2
        },
        {
            "stationName": "63rd Street Weather Station",
            "timestamp": "2022-05-08T02:00:00Z",
            "airTemperature": 8.7
        },
        {
            "stationName": "63rd Street Weather Station",
            "timestamp": "2022-05-08T01:00:00Z",
            "airTemperature": 8.8
        },
        {
            "stationName": "63rd Street Weather Station",
            "timestamp": "2022-05-08T00:00:00Z",
            "airTemperature": 9.1
        },
        {
            "stationName": "63rd Street Weather Station",
            "timestamp": "2022-05-07T23:00:00Z",
            "airTemperature": 9.1
        },
        {
            "stationName": "63rd Street Weather Station",
            "timestamp": "2022-05-07T22:00:00Z",
            "airTemperature": 9.1
        },
        {
            "stationName": "63rd Street Weather Station",
            "timestamp": "2022-05-07T21:00:00Z",
            "airTemperature": 8.8
        },
        {
            "stationName": "63rd Street Weather Station",
            "timestamp": "2022-05-07T20:00:00Z",
            "airTemperature": 8.6
        },
        {
            "stationName": "63rd Street Weather Station",
            "timestamp": "2022-05-07T19:00:00Z",
            "airTemperature": 9.2
        },
        {
            "stationName": "63rd Street Weather Station",
            "timestamp": "2022-05-07T18:00:00Z",
            "airTemperature": 9.5
        },
        {
            "stationName": "63rd Street Weather Station",
            "timestamp": "2022-05-07T17:00:00Z",
            "airTemperature": 9.7
        },
        {
            "stationName": "63rd Street Weather Station",
            "timestamp": "2022-05-07T16:00:00Z",
            "airTemperature": 9.7
        },
        {
            "stationName": "63rd Street Weather Station",
            "timestamp": "2022-05-07T15:00:00Z",
            "airTemperature": 9.6
        },
        {
            "stationName": "63rd Street Weather Station",
            "timestamp": "2022-05-07T14:00:00Z",
            "airTemperature": 9.3
        },
        {
            "stationName": "63rd Street Weather Station",
            "timestamp": "2022-05-07T13:00:00Z",
            "airTemperature": 9.3
        },
        {
            "stationName": "63rd Street Weather Station",
            "timestamp": "2022-05-07T12:00:00Z",
            "airTemperature": 9.4
        },
        {
            "stationName": "63rd Street Weather Station",
            "timestamp": "2022-05-07T11:00:00Z",
            "airTemperature": 8.9
        },
        {
            "stationName": "63rd Street Weather Station",
            "timestamp": "2022-05-07T10:00:00Z",
            "airTemperature": 9.2
        },
        {
            "stationName": "63rd Street Weather Station",
            "timestamp": "2022-05-07T09:00:00Z",
            "airTemperature": 9.0
        },

        {
            "stationName": "Foster Weather Station",
            "timestamp": "2022-05-08T08:00:00Z",
            "airTemperature": 9.28
        },
        {
            "stationName": "Foster Weather Station",
            "timestamp": "2022-05-08T07:00:00Z",
            "airTemperature": 9.39
        },
        {
            "stationName": "Foster Weather Station",
            "timestamp": "2022-05-08T06:00:00Z",
            "airTemperature": 9.39
        },
        {
            "stationName": "Foster Weather Station",
            "timestamp": "2022-05-08T05:00:00Z",
            "airTemperature": 9.06
        },
        {
            "stationName": "Foster Weather Station",
            "timestamp": "2022-05-08T04:00:00Z",
            "airTemperature": 7.78
        },
        {
            "stationName": "Foster Weather Station",
            "timestamp": "2022-05-08T03:00:00Z",
            "airTemperature": 7.67
        },
        {
            "stationName": "Foster Weather Station",
            "timestamp": "2022-05-08T02:00:00Z",
            "airTemperature": 7.67
        },
        {
            "stationName": "Foster Weather Station",
            "timestamp": "2022-05-08T01:00:00Z",
            "airTemperature": 8.39
        },
        {
            "stationName": "Foster Weather Station",
            "timestamp": "2022-05-08T00:00:00Z",
            "airTemperature": 8.28
        },
        {
            "stationName": "Foster Weather Station",
            "timestamp": "2022-05-07T23:00:00Z",
            "airTemperature": 8.39
        },
        {
            "stationName": "Foster Weather Station",
            "timestamp": "2022-05-07T22:00:00Z",
            "airTemperature": 8.5
        },
        {
            "stationName": "Foster Weather Station",
            "timestamp": "2022-05-07T21:00:00Z",
            "airTemperature": 8.39
        },
        {
            "stationName": "Foster Weather Station",
            "timestamp": "2022-05-07T20:00:00Z",
            "airTemperature": 7.67
        },
        {
            "stationName": "Foster Weather Station",
            "timestamp": "2022-05-07T19:00:00Z",
            "airTemperature": 8.28
        },
        {
            "stationName": "Foster Weather Station",
            "timestamp": "2022-05-07T18:00:00Z",
            "airTemperature": 8.17
        },
        {
            "stationName": "Foster Weather Station",
            "timestamp": "2022-05-07T17:00:00Z",
            "airTemperature": 8.67
        },
        {
            "stationName": "Foster Weather Station",
            "timestamp": "2022-05-07T16:00:00Z",
            "airTemperature": 8.5
        },
        {
            "stationName": "Foster Weather Station",
            "timestamp": "2022-05-07T15:00:00Z",
            "airTemperature": 8.39
        },
        {
            "stationName": "Foster Weather Station",
            "timestamp": "2022-05-07T14:00:00Z",
            "airTemperature": 8.5
        },
        {
            "stationName": "Foster Weather Station",
            "timestamp": "2022-05-07T13:00:00Z",
            "airTemperature": 8.67
        },
        {
            "stationName": "Foster Weather Station",
            "timestamp": "2022-05-07T12:00:00Z",
            "airTemperature": 8.17
        },
        {
            "stationName": "Foster Weather Station",
            "timestamp": "2022-05-07T11:00:00Z",
            "airTemperature": 8.28
        },
        {
            "stationName": "Foster Weather Station",
            "timestamp": "2022-05-07T10:00:00Z",
            "airTemperature": 7.67
        },
        {
            "stationName": "Foster Weather Station",
            "timestamp": "2022-05-07T09:00:00Z",
            "airTemperature": 8.39
        },
        {
            "stationName": "Oak Street Weather Station",

            "timestamp": "2022-05-08T08:00:00Z",
            "airTemperature": 10.8
        },
        {
            "stationName": "Oak Street Weather Station",
            "timestamp": "2022-05-08T07:00:00Z",
            "airTemperature": 10.8
        },
        {
            "stationName": "Oak Street Weather Station",
            "timestamp": "2022-05-08T06:00:00Z",
            "airTemperature": 11.7
        },
        {
            "stationName": "Oak Street Weather Station",
            "timestamp": "2022-05-08T05:00:00Z",
            "airTemperature": 12
        },
        {
            "stationName": "Oak Street Weather Station",
            "timestamp": "2022-05-08T04:00:00Z",
            "airTemperature": 12.3
        },
        {
            "stationName": "Oak Street Weather Station",
            "timestamp": "2022-05-08T03:00:00Z",
            "airTemperature": 9.8
        },
        {
            "stationName": "Oak Street Weather Station",
            "timestamp": "2022-05-08T02:00:00Z",
            "airTemperature": 9.2
        },
        {
            "stationName": "Oak Street Weather Station",
            "timestamp": "2022-05-08T01:00:00Z",
            "airTemperature": 9.4
        },
        {
            "stationName": "Oak Street Weather Station",
            "timestamp": "2022-05-08T00:00:00Z",
            "airTemperature": 9.4
        },
        {
            "stationName": "Oak Street Weather Station",
            "timestamp": "2022-05-07T23:00:00Z",
            "airTemperature": 9.5
        },
        {
            "stationName": "Oak Street Weather Station",
            "timestamp": "2022-05-07T22:00:00Z",
            "airTemperature": 9.7
        },
        {
            "stationName": "Oak Street Weather Station",
            "timestamp": "2022-05-07T21:00:00Z",
            "airTemperature": 9.1
        },
        {
            "stationName": "Oak Street Weather Station",
            "timestamp": "2022-05-07T20:00:00Z",
            "airTemperature": 8.7
        },
        {
            "stationName": "Oak Street Weather Station",
            "timestamp": "2022-05-07T19:00:00Z",
            "airTemperature": 9.1
        },
        {
            "stationName": "Oak Street Weather Station",
            "timestamp": "2022-05-07T18:00:00Z",
            "airTemperature": 9.1
        },
        {
            "stationName": "Oak Street Weather Station",
            "timestamp": "2022-05-07T17:00:00Z",
            "airTemperature": 9.3
        },
        {
            "stationName": "Oak Street Weather Station",
            "timestamp": "2022-05-07T16:00:00Z",
            "airTemperature": 9.7
        },
        {
            "stationName": "Oak Street Weather Station",
            "timestamp": "2022-05-07T15:00:00Z",
            "airTemperature": 9.5
        },
        {
            "stationName": "Oak Street Weather Station",
            "timestamp": "2022-05-07T14:00:00Z",

            "airTemperature": 9
        },
        {
            "stationName": "Oak Street Weather Station",
            "timestamp": "2022-05-07T13:00:00Z",
            "airTemperature": 9.3
        },
        {
            "stationName": "Oak Street Weather Station",
            "timestamp": "2022-05-07T12:00:00Z",
            "airTemperature": 9.4
        },
        {
            "stationName": "Oak Street Weather Station",
            "timestamp": "2022-05-07T11:00:00Z",
            "airTemperature": 9.2
        },
        {
            "stationName": "Oak Street Weather Station",
            "timestamp": "2022-05-07T10:00:00Z",
            "airTemperature": 9.2
        },
        {
            "stationName": "Oak Street Weather Station",
            "timestamp": "2022-05-07T09:00:00Z",
            "airTemperature": 8.6
        }
    ]
}

const topic = 'test'
client.on('connect', () => {
    console.log('Connected')
    client.subscribe([topic], () => {
        console.log(`Subscribe to topic '${topic}'`)
    })
    client.publish(topic, JSON.stringify(message), { qos: 0, retain: false }, (error) => {
        if (error) {
            console.error(error)
        }
    })
})

client.on('message', (topic, payload) => {
    console.log('message send')
})