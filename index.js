const fs = require("fs");
const sleep = require("sleep");

function match_data(parent_file, children_file) {
  // Code here

  fs.readFile(parent_file, function(err, data) {
    
    if (err) {
      throw err;
    }

    let parent_data = JSON.parse(data);
    

    fs.readFile(children_file, function(err, data) {

      if (err) {
        throw err;
      }

      let children_data = JSON.parse(data);
      let result = [];

      for (let i = 0; i < parent_data.length; i++) {

        let arr = [];

        for (let j = 0; j < children_data.length; j++) {

          if (children_data[j].family === parent_data[i].last_name) {
            arr.push(children_data[j].full_name);
          }
        }

        let obj = {
          id: parent_data[i].id,
          first_name: parent_data[i].first_name,
          last_name: parent_data[i].last_name,
          age: parent_data[i].age,
          children: arr

        };

        result.push(obj);
      }

      sleep.sleep(5);
      console.log(result);

    });
  });
}

match_data("./parents.json", "./children.json");
console.log("Notification : Data sedang diproses !");
