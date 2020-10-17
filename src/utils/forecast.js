const request = require('postman-request');

const forecast = (lat, long, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=fbe12ceeb68d85d5b1386e31f70cb5cf&query=' + lat +',' + long + '&units=f';

    request({url, json: true}, (error, { body }) => {
        if (error) {
            callback('Unable to connect to location services.', undefined);
        } else if (body.error) {
            callback('Unable to find location. Try another search.', undefined);
        } else {
            callback(undefined, {
                temperature: body.current.temperature,
                feelsLike: body.current.feelslike,
                description: body.current.weather_descriptions[0],
                humidity: body.current.humidity
            });
        }

    });
};

module.exports = forecast;