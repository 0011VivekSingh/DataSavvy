const express = require('express');
const app = express();
const port=5000;

const userRouter = require('./routers/userRouter')//folder.....
const toolRouter = require('./routers/toolRouter')

const cors = require('cors')


app.use(cors({origin:'http://localhost:3000'}));
// data is move formwrd in the form of json 
app.use(express.json());

app.use('/user', userRouter);
app.use('/tool', toolRouter);



app.get('/',(req,res)=> {

    res.send('working fine');



});
app.get('/home',(req,res)=> {

    res.send('Response from home');



});
app.get('/add',(req,res)=> {

    res.send('Response from Add');



});
app.get('/delete',(req,res)=> {

    res.send('Response from Delete');



});


app.listen(port, ()=>{console.log('server started')} )
