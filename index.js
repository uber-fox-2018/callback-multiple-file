const fs = require('fs');
const sleep = require('sleep');

function match_data(parent_file, children_file) {
  // Code here

  fs.readFile(parent_file, function(err,data) {
    if(err){
      throw err
    } 
      dataParent = JSON.parse(data)
      // console.log(dataParent)
      sleep.sleep(5)
      fs.readFile(children_file, function(err,data){
        if(err){
          throw err
        } 
          childData = JSON.parse(data)

          let result = []

          for (let i = 0; i < dataParent.length; i++) {
            let arrTmp = []
             for (let j = 0; j < childData.length; j++) {
            
              if (childData[j].family === dataParent[i].last_name) {
              arrTmp.push(childData[j].full_name)
          }
        }

        let objMatch = {
          id: dataParent[i].id,
          first_name: dataParent[i].first_name,
          last_name: dataParent[i].last_name,
          age: dataParent[i].age,
          children: arrTmp,
        }
        result.push(objMatch)
      }
       console.log(result)   
        
      })
  
    
  })

}

match_data('./parents.json', './children.json')
console.log("Notification : Data sedang diproses !");


