const { Schema,model} = require ('../connection');

const myschema = new Schema({
 
    name: String,
    email: {type : String, unique: true},
    password: String,
    avatar: String,
    createdAt: Date,

});
module.exports= model('users', myschema);//