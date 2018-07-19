const fs = require('fs');
const sleep = require('sleep');

function match_data(parent_file, children_file) {
  parser (parent_file, (parents) => {
    console.log('data parent sedang diproses...');
    sleep.sleep(5);
    parser (children_file, (children) => {
      console.log('data children sedang diproses...');
      sleep.sleep(5);
      parents.forEach((parent) => {
        let childrenArr = children.filter((child) => {
          return child.family == parent.last_name;
        })
        parent.children = childrenArr;
        console.log(parent);
      })
    })
  })
}

function parser (path, cb){
  fs.readFile(path, 'utf8', (err, result) => {
    if (err){
      console.log(err.message);
    } else {
      cb (JSON.parse(result))
    }
  })
}


match_data('./parents.json', './children.json')
console.log("Notification : Data sedang diproses !");

