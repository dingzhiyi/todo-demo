const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
  if(err){
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');
/*
  db.collection('Todos').insertOne({
    test:'Something to do',
    completed:false
  },(err,result)=>{
    if(err){
      return console.log(err);
    }
    console.log(JSON.stringify(result.ops,undefined,2));
  });
*/
  db.collection('Todos').insertOne({
    name:'Ding',
    age:24,
    location:'Tokyo'
  },(err,result)=>{
    if(err){
      return console.log(err);
    }
    console.log(result.ops[0]._id.getTimestamp());
  });

  db.close();
});
