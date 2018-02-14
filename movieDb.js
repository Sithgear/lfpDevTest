var mongoose = require('mongoose');

mongoose.connect('mongodb://Sithgear:MongoTestDB32@devtestdb-shard-00-00-ikpcd.mongodb.net:27017,devtestdb-shard-00-01-ikpcd.mongodb.net:27017,devtestdb-shard-00-02-ikpcd.mongodb.net:27017/test?ssl=true&replicaSet=DevTestDB-shard-0&authSource=admin');
