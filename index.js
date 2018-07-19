const fs = require('fs');
const sleep = require('sleep');

function match_data(parent_file, children_file) {
  fs.readFile(parent_file, 'utf-8', (err, data) => {
    sleep.sleep(5)
    let parentFiles = JSON.parse(data)
    fs.readFile(children_file, 'utf-8', (err, data) => {
      let childrenFiles = JSON.parse(data)
        for (let i = 0; i < parentFiles.length; i++) {
          parentFiles[i]['children'] = []
          for (let j = 0; j < childrenFiles.length; j++) {
            if (childrenFiles[j]['family'] === parentFiles[i]['last_name']) {
                parentFiles[i]['children'].push(childrenFiles[j]['full_name']);
            }
          }
        }
        display(parentFiles)
    })
  })

}

function display (callBack) {
  console.log(callBack)
}

match_data('./parents.json', './children.json')
console.log("Notification : Data sedang diproses !");

// readFile() {
//   let fileStr = fs.readFileSync('./data.json', 'utf-8')
//   this.dataJson = JSON.parse(fileStr)
// }
