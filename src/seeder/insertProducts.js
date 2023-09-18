var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://minhntn19010065:D9apYddeM55HI7BB@cluster0.gfw70j3.mongodb.net/?retryWrites=true&w=majority";
console.log('Haha');

MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("mydb");
    var myobj = { name: "Company Inc", address: "Highway 37" };
    dbo.collection("customers").insertOne(myobj, function(err, res) {
      if (err) throw err;
      console.log("1 document inserted");
      db.close();
    });
  });