const fs = require('fs');
//const sleep = require('sleep');

function match_data(parent_file, children_file) {
  // Code here
  fs.readFile(parent_file, 'utf8', function (err, data) {
    console.log('Reading parent file...');

    setTimeout(function () {
      if (err)
        return console.log('Error when read file.');

      let parent_data = JSON.parse(data);

      fs.readFile(children_file, 'utf8', function (err, data) {
        console.log('Reading children file...');
        
        setTimeout(function () {
          if (err)
            return console.log('Error when read file.');

          let children_data = JSON.parse(data);

          parent_data.forEach(parent => {
            parent['children'] = [];
            children_data.forEach(child => {
              if (parent.last_name === child.family)
                parent.children.push(child.full_name);
            });
          });
          console.log(parent_data);
        }, 5000);

      });

    }, 5000);

  });
}

match_data('./parents.json', './children.json')
console.log("Notification : Data sedang diproses !");
