const fs = require('fs');
const sleep = require('sleep');

function match_data(parent_file, children_file) {
  fs.readFile(parent_file, 'utf8', (err, data) => {
    sleep.sleep(5)
    if (err) throw err;
    parent_data = JSON.parse(data)
    fs.readFile(children_file, 'utf8', (err, data) => {
      sleep.sleep(5)
      if (err) throw err;
      children_data = JSON.parse(data)
      parent_data.forEach(parent => {
        parent.children = []
        children_data.forEach(child =>{
          if (parent.last_name===child.family){
            parent.children.push(child.full_name)
          }
        })
      });
      console.log(parent_data)
    })  
  });
}



match_data('./parents.json', './children.json')
console.log("Notification : Data sedang diproses !");
