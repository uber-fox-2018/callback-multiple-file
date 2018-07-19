const fs = require('fs');
const sleep = require('sleep');

function match_data(parent_file, children_file,cb) {
  let parent_data = fs.readFile(parent_file, 'utf8', (err,dataParent) => {
    if (err) {
      throw err
    }
    sleep.sleep(5)
    dataParent = JSON.parse(dataParent)
    fs.readFile(children_file, 'utf8', (err, dataChildren) => {
      if (err) {
        throw err
      }
      sleep.sleep(5)
      dataChildren = JSON.parse(dataChildren)
      for(let i = 0; i<dataParent.length; i++){
        dataParent[i].children = []
        for(let j = 0; j<dataChildren.length; j++){
          if(dataParent[i].last_name === dataChildren[j].family){
            dataParent[i].children.push(dataChildren[j].full_name)
          }
        }  
      }
      // console.log(dataParent)
      cb(dataParent)
      })
    })
  }

  
  
  match_data('./parents.json', './children.json', function(data){
    console.log(data)
  })
  console.log("Notification : Data sedang diproses !");
  