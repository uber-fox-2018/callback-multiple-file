const fs = require('fs');
var sleep = require('sleep');

function match_data(parent_file, children_file) {
  // your code here...

  fs.readFile(parent_file, function(err,data) {
    if (err) {
      throw err
    } 
    let parentData = JSON.parse(data)
    sleep.sleep(5)
    fs.readFile(children_file, function(err,data) {
      if (err) {
        throw err
      } 
      let childrenData = JSON.parse(data)
      let output = []
      for (let i = 0; i < parentData.length; i++) {
        let newArr = []
          for (let j = 0; j < childrenData.length; j++) {
            if (childrenData[j].family === parentData[i].last_name) {
              newArr.push(childrenData[j].full_name)
            }
          }
          let obj = {
            id: parentData[i].id,
            full_name: parentData[i].full_name,
            last_name: parentData[i].last_name,
            age: parentData[i].age,
            children: newArr
          }
          output.push(obj)
        }
        console.log(obj)
      })
    }) 
  }     



match_data('./parents.json', './childrens.json')
console.log("Notification : Data sedang diproses !");
