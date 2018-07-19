const fs = require("fs");

function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if (new Date().getTime() - start > milliseconds) {
      break;
    }
  }
}

function match_data(parent_file, children_file) {
  // your code here...
  fs.readFile(parent_file, (err, data) => {
    if (err) {
      throw err;
    } else {
      let parent_data = JSON.parse(data);
      sleep(50);
      fs.readFile(children_file, (err, data) => {
        if (err) throw err;
        let children_data = JSON.parse(data);
        for (let i = 0; i < parent_data.length; i++) {
          parent_data[i].children = [];
          for (let j = 0; j < children_data.length; j++) {
            sleep(20);
            if (children_data[j].family === parent_data[i].last_name) {
              parent_data[i].children.push(children_data[j].full_name);
            }
          }
          console.log(parent_data);
          // return parent_data;
        }
      });
    }
  });
}

console.log("Notification : Data sedang diproses !");
console.log(match_data("./parents.json", "./children.json"));
