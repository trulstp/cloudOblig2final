const weatherSchema = require("../models/model");

const post = (req, res) => {
    const nweather = new weatherSchema({
        topic:req.body.topic,
        stationName:req.body.topic,
        timestamp:req.body.timestamp,
        airTemperature:req.body.airTemperature,
    })
    nweather.save()
    .then(data =>{
        res.json(data)
    })
    .catch(error =>{
        res.status(400).send({error})
    })
}

const get = async (req,res)=>{
    try {
        const showWeather = await weatherSchema.find()
        return res.json(showWeather)
    }catch(error){
        return res.json({message:error})
    }
}

module.exports = {post, get};