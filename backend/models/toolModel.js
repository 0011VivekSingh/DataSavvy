const { Schema,model, Types} = require ('../connection');

const myschema = new Schema({
 
    name: String,
    description: String,
    type: String,
    inputs: {type : Array, "default" : []},
    formula : String,
    user: {type : String, ref: 'users'},
    category: {type : String, default: 'custom'},
    createdAt: Date,

});
module.exports= model('tools', myschema);//