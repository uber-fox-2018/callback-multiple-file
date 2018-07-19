const fs = require('fs');
const sleep = require('sleep');

function match_data(parent_file, children_file, display) {
	// Code here
	console.log("Notification : Data sedang diproses !");
	sleep.sleep(2);

	fs.readFile(parent_file, function(err, data) {
		if (err) {
			console.log("File tidak ditemukan")
		} else {
			let parentData = JSON.parse(data);
			// console.log(parentData);
			fs.readFile(children_file, function(err, data) {
				if(err) {
					console.log("File tidak ditemukan")
				} else {
					let childData = JSON.parse(data)
					// console.log(typeof childData)
					// console.log(childData)
					for(let i in parentData) {
						parentData[i].children = [];
						for(let j in childData) {
							if(childData[j].family == parentData[i].last_name) {
								parentData[i].children.push(childData[j].full_name)
							}
						}
					} // end for
				} display(parentData); //callback untuk ditampilkan 
			}); //end children
		}
	}); // end parent
}

function display(data) {
	console.log(data);
}

match_data('./parents.json', './children.json', display)
