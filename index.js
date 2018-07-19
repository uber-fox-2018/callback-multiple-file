const fs = require('fs');
const sleep = require('sleep');

function match_data(parent_file, children_file) {
  fs.readFile(parent_file, 'utf8', function (err, parent){
    sleep.sleep(2)
    if (err) throw err
    else parent = JSON.parse(parent)
    
    fs.readFile(children_file, 'utf8', function (err, child){
      sleep.sleep(2)
      if (err) throw err
      else child = JSON.parse(child)

      for (let i = 0 ; i < parent.length ; i++){
        let temp = []
        for (let j = 0 ; j < child.length ; j++){
          // jika parent.last === child.family
          if (parent[i].last_name === child[j].family){
            temp.push(child[j].full_name)
          }
        }
        parent[i].children = temp
      }
      console.log(parent);
    })
  })
}

match_data('./parents.json', './children.json')
console.log("Notification : Data sedang diproses !");
