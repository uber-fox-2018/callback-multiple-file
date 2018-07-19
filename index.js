const fs = require('fs');
const sleep = require('sleep');

function match_data(parent_file, children_file) {
  let parent = fs.readFile(parent_file,`utf8`,(err,dataParent) => {
    let dataParentJson = JSON.parse(dataParent)
    let children = fs.readFile(children_file,`utf8`,(err,dataChildren) => {
      let dataChildrenJson = JSON.parse(dataChildren)
      for (let i = 0; i < dataParentJson.length; i++) {
        dataParentJson[i].children = []
        for (let j = 0; j < dataChildrenJson.length; j++) {
          if (dataParentJson[i].last_name === dataChildrenJson[j].family) {
            dataParentJson[i].children.push(dataChildrenJson[j].full_name)
          }
        }
      }
      console.log(dataParentJson)
    })
  })
}

match_data('./parents.json', './children.json')
console.log("Notification : Data sedang diproses !");
