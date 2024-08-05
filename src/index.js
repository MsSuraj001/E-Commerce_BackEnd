const express = require('express');
const serverConfig = require('./Config/serverConfig');
const dbconntions = require('./Config/dbConfig');
const { routes } = require('./Router/userRouter');
const { authRoutes } = require('./Router/authRouter');
const cookieParser = require('cookie-parser');
const { isLoggedIn } = require('./Validations/authValidation');
const  cloudinary  = require('./Config/cloudinayConfig');
const uploader = require('./Middleweres/multerMiddlewere');
const fs = require('fs/promises');

const app = express();

app.use(cookieParser());
app.use(express.json());
app.use(express.text());
app.use(express.urlencoded({extended: true}));

app.use('/user', routes);
app.use('/auth', authRoutes);
app.get('/test', isLoggedIn, (req, res)=>{
    console.log(req.body);
    console.log(req.cookies)
    return res.json({
        message : "this is the test routed"
    })
})

app.post('/photo', uploader.single('incomingFile'),  async (req, res) => {
   try{
    console.log("this is the test",req.file);
    const result = await cloudinary.uploader.upload(req.file.path);
    console.log(result);
    await fs.unlink(req.file.path);
    return res.json({ message : "Ok"})
   }catch(error){
    return res.json({ measage : "internal server error", status : 500})
   }
})

app.listen(serverConfig.PORT, async ()=>{
    await dbconntions();
    console.log(`Server start at the ${serverConfig.PORT}`);
})