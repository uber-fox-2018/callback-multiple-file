const fs = require('fs');
const sleep = require('sleep');

function match_data(parent_file, children_file) {
  fs.readFile(parent_file, 'utf8', (err, parents) => {
    console.log('data parent sedang diproses...');
    sleep.sleep(5);
    if(err){
      console.log(err.message);
    } else {
      fs.readFile(children_file, 'utf8', (err, children) => {
        console.log('data children sedang diproses...');
        sleep.sleep(5);
        if (err){
          console.log(err.message);
        } else {
          JSON.parse(parents).forEach((parent) => {
            let childrenArr = JSON.parse(children).filter((child) => {
              return child.family == parent.last_name;
            })
            parent.children = childrenArr;
            console.log(parent)
          })
        }
      })
    }
  })
}


match_data('./parents.json', './children.json')
console.log("Notification : Data sedang diproses !");

