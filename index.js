const fs = require('fs');
const sleep = require('sleep');

function match_data(parent_file, children_file) {
  // Code here
  fs.readFile(parent_file,function(err,data){
    if (err) {
      throw err
    }
    let parent_data = JSON.parse(data)
    // console.log(parent_data);
    sleep.sleep(5)
    fs.readFile(children_file,function(err,data){
      if (err) {
        throw err
      }
      let children_data = JSON.parse(data)
      // console.log(children_data);
      let output = []
      for (let i = 0; i < parent_data.length; i++) {
        let newArr = []
        for (let j = 0; j < children_data.length; j++) {
          // console.log(children_data[j].family);
          if (children_data[j].family === parent_data[i].last_name) {
            newArr.push(children_data[j].full_name)
          }
        }

        let obj = {
          id: parent_data[i].id,
          first_name: parent_data[i].first_name,
          last_name: parent_data[i].last_name,
          age: parent_data[i].age,
          children: newArr,
        }
        output.push(obj)
      }
      console.log(output); 
    })
  })
}

match_data('./parents.json', './children.json')
console.log("Notification : Data sedang diproses !");
