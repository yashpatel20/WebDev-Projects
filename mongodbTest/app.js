const MongoClient = require("mongodb").MongoClient;
const uri =
  "mongodb+srv://admin:Yhp@1997@cluster0-umicp.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useUnifiedTopology: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});
