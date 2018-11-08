var express = require('express');
var app = express();
var mongoose = require('mongoose');

mongoose.connect('mongodb://admin:admin123@ds155203.mlab.com:55203/tangerine_local_library');

var Schema = mongoose.Schema;

var userSchema = new Schema({name: String, status: String});

var user = mongoose.model('User', userSchema);

var john = user({name: 'John', status: 'active'});

john.save(function(err){
    if (err) throw err;

    console.log('***** User Saved! *****');
})

var jane = user({name: 'Jane', status: 'active'});

jane.save(function(err){
    if (err) throw err;

    console.log('***** User Saved! *****');
})

var port = process.env.port || 3000;
app.listen(port);

