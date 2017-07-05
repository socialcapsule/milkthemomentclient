
Parse.Cloud.define('hello', function(req, res) {
  res.success('Hi');
});
Parse.Cloud.define("sendSMS", function(request, response) {
         
   var toUser = request.params.toUser;
   var msgBody = request.params.msgBody;
  // Require and initialize the Twilio module with your credentials
         
//var client = require('twilio')('AC10b0b6b7218e1da28313e3bff9d51bba','6fb83314fdfe3a24b947df1a7754ace5');
var client = require('twilio')('AC3ce509f4e270567a423b8980d6121032','9435ac4a1aff13d6851fbd04f70cbe12');
          
           
// Send an SMS message
client.sendSms({
   // to: '+919951121245',
  to: toUser,
    //from: '+16467627663', 
    from: '+1919975-5360',
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
