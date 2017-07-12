
Parse.Cloud.define('hello', function(req, res) {
  res.success('Hi');
});
Parse.Cloud.define("sendSMS", function(request, response) {
         
   var toUser = request.params.toUser;
   var msgBody = request.params.msgBody;
  // Require and initialize the Twilio module with your credentials
         
//var client = require('twilio')('AC10b0b6b7218e1da28313e3bff9d51bba','6fb83314fdfe3a24b947df1a7754ace5');
//var client = require('twilio')('ACdad1f837df5f4d8731aedfb914d3167e','8d30e8e01ddc9a4fa8fe809a6cad3c30');
  var client = require('twilio')('AC422344b7ff75b18e9f9bb862c376b81c','49e9082597dcde328ee99d396fb2a9db');
          
  console.log("number",+toUser);         
// Send an SMS message
client.sendSms({
   // to: '+919951121245',
  to: toUser,
    //from: '+16467627663', 
    //from: '+14437207459 ',
  from:'+12028835641',  
  body: msgBody
  }, function(err, responseData) { 
    if (err) {
      console.log(err);
      response.error(err);
    } else { 
      console.log(responseData.from); 
      console.log(responseData.body);
      response.success('Message sent!');
    }
  }
);
         
});
