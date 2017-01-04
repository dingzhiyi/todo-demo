const {MongoClient,ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
  if(err){
    return console.log(err);
  }
  console.log('Connected to db');

  db.collection('Todos').findOneAndUpdate({_id:ObjectID("586bfd8369710c60e0d6b76a")}
,{$set:{
  completed:true
}},{
  returnOriginal:false
}).then((res)=>{
  console.log(JSON.stringify(res,undefined,2))
},(err)=>{
  return console.log(err);
});

});
