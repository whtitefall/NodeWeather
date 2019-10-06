const request = require('request'); 


module.exports.geoAddress = (address,callback) =>{

    var address = encodeURIComponent(address)
    request(`http://www.mapquestapi.com/geocoding/v1/address?key=\
    cDWCBM1wfGNUN6J8ruFAmRB9GLRKLCxx&location=${address}`,
    
    function(err,response,body){
        var body = JSON.parse(body)
        var lat = body.results[0].locations[0].latLng.lat 
        var lng = body.results[0].locations[0].latLng.lng 
        

        callback(undefined, {
            lat,lng 
        })
        // if(body.results[0].locations[0].street === ''){
            
        //     callback('Wrong address')
        // }else {
        //     callback(undefined, {
        //         lat,lng 
        //     })
        // }


    })

};




