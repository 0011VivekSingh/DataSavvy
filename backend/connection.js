const mongoose = require('mongoose');
 const url = `mongodb+srv://0011VivekSingh:vivek738063@cluster0.svjgdho.mongodb.net/datasavvy?retryWrites=true&w=majority`
 
 
 //connecting  mongoose.....
 mongoose.connect(url)
 .then((result) => {
    console.log('server connected');
 })
 
 .catch((err) => {
    console.error(err);
 });
 module.exports = mongoose;