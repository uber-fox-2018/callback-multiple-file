const fs = require('fs');
const sleep = require('sleep');

// const parents = './parents.json';
// const children = './children.json';

function match_data(parent_file, children_file) {
  
  fs.readFile('./parents.json', 'utf8', (err, parents) => {
    sleep.sleep(3);
    if (err) throw err
    let parentsdata = JSON.parse(parents);
    // console.log(parentsdata);

    fs.readFile('./children.json', 'utf8', (err, children) => {
      sleep.sleep(3);
      if (err) throw err
      let childrendata = JSON.parse(children);
      // console.log(childrendata);

      parentsdata.forEach(function (parent) { //to get every element
        let childrenArr = childrendata.filter(function (child) {
          return child.family === parent.last_name;
        })
        parent.childrendata = childrenArr;
        console.log(parent);
      })
    })
  })
}

match_data('./parents.json', './children.json')
console.log("Notification : Data sedang diproses !");
