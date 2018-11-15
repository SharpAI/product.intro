var nodemailer = require('nodemailer');
var express = require('express');
const querystring = require("querystring");
var app = express();
//  POST 请求
app.post('/email', function (req, res) {
    var chunks ="";
    req.on('data', function (chunk) {
        var date = querystring.unescape(chunk.toString());
        chunks = date;
        var body = querystring.parse(chunks);  //将一个字符串反序列化为一个对象
        var arr = "邮箱："+body.email+'客户名称:'+body.name+'客户提问:'+body.text;
        
        var transporter = nodemailer.createTransport({
            service:"QQ"
              ,auth: {
                user: '923948307@qq.com',
                pass: 'tphgqdroixcjbedd'
              }
          });
        //发送邮件
        var option = {
            from:"923948307@qq.com",//发送邮件的邮箱
            //to:"zezhang@actiontec.com" //目标邮箱
            to:'gliu@actiontec.com'
        }
        option.subject = 'hello'
        option.html= arr;
        transporter.sendMail(option, function(error, response){
            if(error){
                console.log("fail: " + error);
            }else{
                 console.log('邮件已发送！');
                 var json = JSON.stringify({ result: 'ok'});
                 res.end(json)
            }
        });
        res.send('成功');
    });
})

 var server = app.listen(8888, function () {
    var host = server.address().address
    var port = server.address().port
    console.log("应用实例，访问地址为 http://%s:%s", host, port)
   
  })
