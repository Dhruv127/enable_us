const express = require('express')
const app = express()
const port=process.env.PORT ||5000;
const path=require('path')
const Mongodb=require('./db');
Mongodb();
app.use((req,res,next)=>{
    res.setHeader("Access-Control-Allow-Origin",'*');
    res.header(
        "Access-Control-Allow-Headers",
        "Origin,X-Requested-With,Content-Type,Accept"
    );
    next();
})
// respond with "hello world" when a GET request is made to the homepage
app.get('/', (req, res) => {
  res.send('hello world')
})
app.use(express.static(path.join(__dirname,'../food/build/')))

app.get("*",function(req,res){
  res.sendFile(path.join(__dirname,'../food/build/index.html'
  ))
})
app.use(express.json())
app.use('/api',require('./Routes/CreateUser'));
app.use('/api',require('./Routes/shopdata'));
app.use('/api',require('./Routes/OrderData'));

app.listen(port,()=>{

})