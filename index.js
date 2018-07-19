const fs = require('fs');
//const sleep = require('sleep');
function sleep (milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds) {
      break;
    }
  }
}


function match_data(parent_file, children_file) {
  
  fs.readFile(parent_file, (err, data1) => {
    var parent_data = JSON.parse(data1)
    sleep(5000)

    fs.readFile(children_file, (err, data2) => {
      var children_data = JSON.parse(data2)
      sleep(5000)

      for (let i=0; i<parent_data.length; i++) {
        parent_data[i]["children"]= []

        for (var child of children_data) {
          if (parent_data[i]["last_name"]===child.family) {
            parent_data[i]["children"].push(child.full_name)
          }
        }
      }
      console.log (parent_data)
      //console.log (parent_data[0])

    })
  })
}


match_data('./parents.json', './children.json')
console.log("Notification : Data sedang diproses !");