
const fs = require('fs');
const sleep = require('sleep');

function match_data(parent_file, children_file, cb) {
  // Code here
  fs.readFile(parent_file,'utf8',(err,data) =>{
    if(err){
      console.log('ciee yang lagi nyariin bapak')
    }else{
      var parent_file = JSON.parse(data)
      sleep.sleep(3)
      fs.readFile(children_file,'utf8',(err,data) =>{
        if(err) {
          console.log(`Salah lu`)
        } else {
          var children_file = JSON.parse(data)
          for(let i = 0 ; i < parent_file.length ; i++){
            parent_file[i].children = []
            for(let j = 0 ; j < children_file.length ; j++){
              if(parent_file[i].last_name === children_file[j].family){
                parent_file[i].children.push(children_file[j].full_name)
              }
            }
          }
          // console.log(parent_file)
          cb(parent_file)
        }
      })
    }
   
  })
}

// function readFileChildren(parent_file, data){
//   // var children_file = JSON.parse(data)
//   console.log(parent_file)
// }

function cb(data) {
  console.log(data);
  
}

match_data('./parentss.json', './children.json', cb)
console.log("Notification : Data sedang diproses !");