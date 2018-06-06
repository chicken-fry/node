var fs = require('fs');

fs.readFile('./data/login.data',function(err,content){
        if(err) throw err;
        var data = JSON.parse(content.toString());
        var users = data.users;
        var user = {
            id:"Yasir1",
            email:"YasirKamdar1@gmail.com",
            password:"abc@1231"
        };
        data.users.push(user);
        console.log(data)
        fs.writeFile('./data/login.data',JSON.stringify(data),function(err){
          if(err) throw err;
      })
})
