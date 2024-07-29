const express = require('express');
const serverConfig = require('./Config/serverConfig');
const dbconntions = require('./Config/dbConfig');
const { routes } = require('./Router/userRouter');
const { authRoutes } = require('./Router/authRouter');

const app = express();

app.use(express.json());
app.use(express.text());
app.use(express.urlencoded({extended: true}));

app.use('/user', routes);
app.use('/auth', authRoutes);

app.listen(serverConfig.PORT, async ()=>{
    await dbconntions();
    console.log(`Server start at the ${serverConfig.PORT}`);
})