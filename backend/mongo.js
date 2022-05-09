const mqtt = require('mqtt');
const host = 'cloud-oblig2truls.herokuapp.com/'
const clientId = `mqtt_${Math.random().toString(16).slice(3)}`
const axios = require('axios')
const connectUrl = `ws://${host}`

const client = mqtt.connect(connectUrl, {
    clientId,
    clean: true,
    connectTimeout: 4000,
    username: 'test',
    password: '123',
    reconnectPeriod: 1000,
})
const topic = 'test'
client.on('connect', () => {
  console.log('Connected')
  client.subscribe([topic], () => {
      console.log(`Subscribe to topic '${topic}'`)
  })
})

client.on('message', (topic, payload) => {
  axios.post('http://cloudoblig2.herokuapp.com/app/', JSON.parse(payload.toString())).then((response) => console.log(response.data));
})