const fs = require('fs');
const sleep = require('sleep');

function match_data(parent_file, children_file) {
  fs.readFile(parent_file, 'utf-8', (err, data) => {
    console.log(data);
  })

}

match_data('./parents.json', './children.json')
console.log("Notification : Data sedang diproses !");

// readFile() {
//   let fileStr = fs.readFileSync('./data.json', 'utf-8')
//   this.dataJson = JSON.parse(fileStr)
// }
