const express = require('express');

const app = express();


app.get('/',(req,res)=>{
    res.send('hello!! Server is running');
})


const server = app.listen(3000,()=>{
    const host = server.address().address;
    const port = server.address().port;
    console.log(`server is running port http://${host}:${port}`);
})