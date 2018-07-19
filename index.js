const fs = require('fs');
const sleep = require('sleep');

function match_data(parent_file, children_file) {
  // Code here
  fs.readFile('./parents.json', 'utf8', function (err, parent) {
    if (err) throw err
    else parent = JSON.parse(parent)
    fs.readFile('./children.json', 'utf8', function (err, children) {
      if (err) throw err
      else children = JSON.parse(children)
    
      let searchChild = []
      for (let a = 0; a < parent.length; a++) {
        let temp = []
        for (let b = 0; b < children.length; b++) {
          if (parent[a].last_name == children[b].family) temp.push(children[b].full_name)
        }
        parent[a].children = temp
      }
      console.log(parent)
    })
  })

}

match_data('./parents.json', './children.json')
console.log("Notification : Data sedang diproses !");
