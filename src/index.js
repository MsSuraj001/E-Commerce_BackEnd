const express = require('express');
const serverConfig = require('./Config/serverConfig');
const dbconntions = require('./Config/dbConfig');

const app = express();

app.listen(serverConfig.PORT, async ()=>{
    await dbconntions();
    console.log(`Server start at the ${serverConfig.PORT}`);
})