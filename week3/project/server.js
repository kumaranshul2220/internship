var app = require('./app');


var port = '3000';

 function runServer(){
    app.listen(port,()=>console.log('server running on port:',{port}));

}

module.exports=
    {
        "runServer" : runServer,
        "port" : port,
    };