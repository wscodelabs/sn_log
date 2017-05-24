var axios = require('axios');

const END_POINT_URL='http://localhost:4000/api/v1/logs';

function snlog(API_KEY){
  this.apiKey=API_KEY || null

  this.log = function(group_name, message, opts = {}, callback){
    var options = { ...opts, group:group_name, message: message, api:this.apiKey};

    this.post(options, callback);
  }

  this.post =function(params, callback){
    axios.post( END_POINT_URL , params)
    .then(function (response) {
      if(response){
        callback(null,response);
      }   
    })
    .catch(function (error) {
      if(error){
        callback(error, null);
      }
    });
  }
}

module.exports = snlog;

