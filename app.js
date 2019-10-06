const yargs =require('yargs')

const argv = yargs.options(

    {
        a :{
            demand:true ,
            alias: 'address',
            describle : 'address to fetch weather for',
            string: true 
        }
    }
)


const geoCode = require('./geocode/geocode'); 
const weather = require('./weather/weather')


geoCode.geoAddress(argv.address,(err,results) => {

    if (err){
        console.log(err)
    }else{

      
       weather.getWeather(results.lat,results.lng, (err, weatherResults) => {
            if(err){
                console.log(err)
            }else{
                
               console.log(`Current temp is ${weatherResults.temp}`)
               console.log(`apparentTemperature is ${weatherResults.appernttemp}`)
            }
       })
    }
})

