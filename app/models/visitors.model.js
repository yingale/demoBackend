const sql = require("./db.js");
// constructor
const Visitors = function(visitors) {
    this.views = visitors.views;
    this.date = visitors.date;
    this.online = visitors.online;
};


Visitors.updateByDate = (value, date, visitors) => {
if(value>0) {
      sql.query(
        "UPDATE visitors SET views = views + ? WHERE date = ?",
        [value,date],
        (err, res) => {
          if (err) {
            console.log("error: ", err);
            return;
          }
          if (res.affectedRows == 0) {
              sql.query("INSERT INTO visitors (date,views) values(?,?)", [date,value], (err, res) => {
                if (err) {
                  console.log("error: ", err);
                  return;
                }

                console.log("created visitors for date: ", date);
              });
            return;
          }
          console.log("updated visitors for date: ", date);
        }
      );
  }
};

module.exports = Visitors;
