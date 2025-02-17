const express=require('express');
require('dotenv').config();

const setUpAndStartServer=async ()=>{
    const app=express();
    const port=process.env.PORT;
    app.listen(port,()=>{
        console.log('server will start at ',port);
    })
}
setUpAndStartServer(); 
