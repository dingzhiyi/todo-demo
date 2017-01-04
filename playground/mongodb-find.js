const {MongoClient,ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
  if(err){
    return console.log(err);
  }
  console.log('Connected to database');

  db.collection('Todos').find({'_id':ObjectID("586bfd8369710c60e0d6b76a")}).toArray().then((result)=>{
    console.log(JSON.stringify(result,undefined,2));
  },(err)=>{
    return console.log(err);
  });



  db.close();
});
