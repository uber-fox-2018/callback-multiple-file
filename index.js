const fs = require('fs');
const sleep = require('sleep');

function match_data(parent_file, children_file) {
  // Code here
  fs.readFile(parent_file,'utf8',(err,data) =>{
    var parent_file = JSON.parse(data)
    sleep.sleep(3)
    fs.readFile(children_file,'utf8',(err,data) =>{
      var children_file = JSON.parse(data)
      for(let i = 0 ; i < parent_file.length ; i++){
        parent_file[i].children = []
        for(let j = 0 ; j < children_file.length ; j++){
          if(parent_file[i].last_name === children_file[j].family){
            parent_file[i].children.push(children_file[j].full_name)
          }
        }
      }
      console.log(parent_file)
    })
  })
}

// function readFileChildren(parent_file, data){
//   // var children_file = JSON.parse(data)
//   console.log(parent_file)
// }

match_data('./parents.json', './children.json')
console.log("Notification : Data sedang diproses !");
