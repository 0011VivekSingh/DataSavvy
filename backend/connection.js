const mongoose = require('mongoose');
 const url = `mongodb+srv://DatasavvyUser:Data%4012345@cluster0.8djbigs.mongodb.net/datasavvy?retryWrites=true&w=majority&appName=Cluster0`
 
 
 //connecting  mongoose.....
 mongoose.connect(url)
 .then((result) => {
    console.log('server connected');
 })
 
 .catch((err) => {
    console.error(err);
 });
 module.exports = mongoose;
