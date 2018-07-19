const fs = require('fs');
const sleep = require('sleep');

function match_data(parent_file, children_file) {
  // Code here
  fs.readFile(parent_file, 'utf8', (err, parentsData) => {
    sleep.sleep(5)
    // console.log(JSON.parse(parentsData));
    let parents = JSON.parse(parentsData)
    // parents.childrens = []
    console.log(parents);
    
    fs.readFile(children_file, 'utf8', (err, childrenData) => {
      // console.log(childrenData);
      let childrens = JSON.parse(childrenData)
      // console.log();
      for(let i = 0; i < parents.length; i++) {
        parents[i].childrens = []
        for(let j = 0; j < childrens.length; j++) {
          // console.log(childrens[j].full_name);
          
          if(parents[i].last_name === childrens[j].family) {
            parents[i].childrens.push(childrens[j].full_name)
          }
        }
      }
      console.log(parents);
      
    })
  })
}

match_data('./parents.json', './children.json')
console.log("Notification : Data sedang diproses !");
