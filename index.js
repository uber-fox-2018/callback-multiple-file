const fs = require('fs');
const sleep = require('sleep');

function match_data(parent_file, children_file) {
  fs.readFile(parent_file, 'utf8', (err, data) => {
    sleep.sleep(2);
    if(err) {
      console.log(`Something has trouble!`);
    }
    
    let parentData = JSON.parse(data);
    fs.readFile(children_file, 'utf8', (err, data) => {
      if(err) {
        console.log(`Somtehing has trouble!`);
      }
      let childrenData = JSON.parse(data);
      for(let i = 0; i < parentData.length; i++) {
        parentData[i].children = [];
        for(let j = 0; j < childrenData.length; j++) {
          if(parentData[i].last_name === childrenData[j].family) {
            parentData[i].children.push(childrenData[j].full_name);
          }
        }
      }
      callback(parentData);
    });
  });
}

function callback(parentData) {
  console.log(parentData);
  
}

match_data('./parents.json', './children.json')
console.log("Notification : Data sedang diproses !");


// var content;
// fs.readFile('./Index.html', function read(err, data) {
//     if (err) {
//         throw err;
//     }
//     content = data;
// });
// console.log(content);