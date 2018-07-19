const fs = require('fs');
const sleep = require('sleep');

function match_data(parent_file, children_file) {
  fs.readFile(parent_file, 'utf8', function(err,parent_data){
      let parentStr = parent_data;
      let parents = JSON.parse(parentStr);
      sleep.sleep(5);
      fs.readFile(children_file, 'utf8', function(err,children_data){
        let childrenStr = children_data;
        let children = JSON.parse(childrenStr);
        sleep.sleep(5);
        for(let parent of parents){
          parent.children = [];
          for(let child of children){
            if(child.family === parent.last_name){
              parent.children.push(child.full_name);
            }
          }
        }
        console.log(parents);
       
     })
  })
}
match_data('./parents.json', './children.json')
console.log("Notification : Data sedang diproses !");
