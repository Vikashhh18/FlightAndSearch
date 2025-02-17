const express=require('express');
const {PORT}=require('./config/server');

const setUpAndStartServer=async ()=>{
    const app=express();
    app.listen(PORT,()=>{
        console.log('server will start at ',PORT);
    })
}
setUpAndStartServer(); 
