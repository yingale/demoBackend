const Visitors = require("../models/visitors.model.js");
const queueName='visitors';
const redis = require('redis');
client = redis.createClient();
const key = 'visitors';
exports.setData = (req, res) => {
    client.incr(key);
    res.send("success");
};

exports.offLoadData = (req, res) => {
const date = new Date();
const newData = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();
client.get(key, function(err, value) {
  if (err) {
    console.error('error getting key:', err);
  }
  else {
  if(value !=null) {
      client.set(key, '0', function(err) {
        if (err) {
          throw err
        }
        });
    Visitors.updateByDate(value,newData,
    (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Records not found`
          });
        } else {
          res.status(500).send({
            message: "Error updating visitors stats."
          });
        }
      }
    }
    );
    }
  }
});

//res.send("success");
}