const {ObjectID} = require('mongodb');

var {mongoose} = require('./../server/db/mongoose');
var {Todo} = require('./../server/models/todo');

var id = "586d2d83bc68ee37fcdf891e";

//find会返回所有符合搜索条件的条目，
//findOne只会返回头一个，适合用来搜索除了Id以外的所有条件
//findById用来搜索ID效果最佳

if(!ObjectID.isValid(id)){
  return console.log("invalid user ID");
}


Todo.find({
  _id:id
}).then((result)=>{
  console.log(JSON.stringify(result,undefined,2));
});


Todo.findOne({
  _id:id
}).then((result)=>{
  console.log(JSON.stringify(result,undefined,2));
});


Todo.findById(id).then((result)=>{
  console.log(JSON.stringify(result,undefined,2));
});
