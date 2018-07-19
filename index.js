const fs = require('fs');
const sleep = require('sleep');

function match_data(parent_file, children_file) {
  fs.readFile(parent_file, 'utf-8', (err, data_parent) => {
    if (err) throw err;

    const dataParent = JSON.parse(data_parent)
    sleep.sleep(5)
    
    fs.readFile(children_file, 'utf-8', (err, data_children) => {
      if (err) throw err;

      const dataChildren = JSON.parse(data_children)
      sleep.sleep(5)
      
      dataParent.map((parent, i) => {
        var childWithParent = []
        dataChildren.map(child => {
          if (parent.last_name === child.family) {
            childWithParent.push(child.full_name)
          }
        })
        dataParent[i].children = childWithParent
      })
      
      console.log(dataParent)
    })


  })
}

match_data('./parents.json', './children.json')
console.log("Notification : Data sedang diproses !");
