const csv = require('csv-parser');
const fs = require('fs');
const mqtt = require('mqtt');
const host = 'broker.hivemq.com'
const port = '1883'
const clientId = `mqtt_${Math.random().toString(16).slice(3)}`

const connectUrl = `mqtt:=/${host}:${port}`
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
client.publish(topic, 'nodejs mqtt test', { qos: 0, retain: false }, (error) => {
if (error) {
console.error(error)
}
})
})
client.on('message', (topic, payload) => {
console.log('Received Message:', topic, payload.toString())
})