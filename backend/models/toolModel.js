const { Schema,model, Types} = require ('../connection');

const myschema = new Schema({
 
    name: String,
    description: String,
    data: Object,
    formula : String,
    user: {type : String, ref: 'users'},
    createdAt: Date,

});
module.exports= model('tools', myschema);//