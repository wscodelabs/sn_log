var snLog = require('../distribution/index');
var l = new snLog('CMagAnLtRY2S0s5uWm4U');
l.log('error', 'this is simple msg new',null, function(err,res){
  if(err)
    console.log('error =>', err);

  if(res)
    console.log('resp');  
});