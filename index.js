const fs = require('fs');
const sleep = require('sleep');

function match_data(parent_file, children_file) {
  // Code here
  fs.readFile(parent_file,function(err,data){
    var parent = JSON.parse(data)
    fs.readFile(children_file,function(err,data){
      var children = JSON.parse(data)
      for(var i = 0; i < parent.length;i++){
        parent[i].children = []
        for(var j = 0; j < children.length;j++){
          if(parent[i].last_name === children[j].family){
            parent[i].children.push(children[j].full_name)
            console.log(parent[i]);
            sleep.sleep(1)        
            
          }
        }
      }
    })
  })
  
}

match_data('./parents.json', './children.json')
console.log("Notification : Data sedang diproses !");
