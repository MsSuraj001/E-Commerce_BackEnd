const express = require('express');
const serverConfig = require('./Config/serverConfig');
const dbconntions = require('./Config/dbConfig');
const { routes } = require('./Router/userRouter');
const { authRoutes } = require('./Router/authRouter');
const cookieParser = require('cookie-parser');
const { isLoggedIn } = require('./Validations/authValidation');
const productRoute = require('./Router/productRouter');
const cartRouter = require('./Router/cartRoutes');

const app = express();

app.use(cookieParser());
app.use(express.json());
app.use(express.text());
app.use(express.urlencoded({extended: true}));

app.use('/user', routes);
app.use('/auth', authRoutes);
app.use('/product',productRoute);
app.use('/cart', cartRouter);

app.get('/test', isLoggedIn, (req, res)=>{
    console.log(req.body);
    console.log(req.cookies)
    return res.json({
        message : "this is the test routed"
    })
})


app.listen(serverConfig.PORT, async ()=>{
    await dbconntions();
    console.log(`Server start at the ${serverConfig.PORT}`);
})