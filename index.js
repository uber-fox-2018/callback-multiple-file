const fs = require('fs');
const sleep = require('sleep');

function match_data(parent_file, children_file) {
  // Code here
  console.log("Notification : Data sedang diproses !");
  sleep.sleep(5)
  
  fs.readFile(parent_file, 'utf-8',(err,data) => {
    let parent = JSON.parse(data)
    
    fs.readFile(children_file, 'utf-8', (err,data) => {
       let children = JSON.parse(data)
       for(let i = 0; i < parent.length; i++){
        parent[i].children = []
          for(let j = 0; j < children.length; j++){
              if(parent[i].last_name == children[j].family){
                  parent[i].children.push(children[j].full_name)
              }
          }
       }
       console.log(parent)
       
    })
  })
}


match_data('./parents.json', './children.json')

