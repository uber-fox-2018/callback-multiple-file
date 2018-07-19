const fs = require('fs');


function match_data(parent_file, children_file) {
  
  fs.readFile(parent_file,'utf8',function(err,data_parent){
    
    let parent_data = JSON.parse(data_parent)
    console.log("Notification : Data sedang diproses !");
    sleep(3000)
    
    fs.readFile(children_file,'utf8',function(err,data_children){
      let children_data = JSON.parse(data_children)
      console.log(children_data[0])

      for (let i=0 ; i < parent_data.length ; i++){
        parent_data[i]['children'] = []
        for (let j=0 ; j < children_data.length ; j++){
          
          
          if (parent_data[i].last_name == children_data[j].family){
            
            parent_data[i]['children'].push(children_data[j].full_name)
          }
        }
      }
      console.log(parent_data)
      
    })
    
  })
}

match_data('./parents.json', './children.json')
//console.log("Notification : Data sedang diproses !");
function sleep (milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds) {
      break;
    }
  }
}
