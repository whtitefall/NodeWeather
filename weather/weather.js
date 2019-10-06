const request = require('request'); 

module.exports.getWeather = (lat,lng,callback) =>{
    request(`https://api.darksky.net/forecast/85d13dd2133fd9f400bd1367223f4879/${lat},${lng}`,
    (err,response , body) => {
        var body = JSON.parse(body); 

        if(body.code === 400){
            callback(body.err)
        }else{
            callback(undefined,
                {
                    temp: body.currently.temperature,
                    appernttemp: body.currently.apparentTemperature

                }
                )
        }
 
    }
    )
    


}

