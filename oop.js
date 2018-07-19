const fs = require('fs')
const sleep = require('sleep')

class Parent {
  constructor() {
    this.dataParent = null
  }

  readFileParent(cb) {
    fs.readFile('parents.json', 'utf-8', (err, data_parent) => {
      if (err) throw err;

      this.dataParent = JSON.parse(data_parent)
      sleep.sleep(3)
      cb()
    })
  }
}

class Children {
  constructor() {
    this.dataChildren = null
  }

  readFileChild(cb) {
    fs.readFile('children.json', 'utf-8', (err, data_child) => {
      if (err) throw err

      this.dataChildren = JSON.parse(data_child)
      cb()
    })
  }
}

class Family {
  constructor() {
    this.dataParents = new Parent
    this.dataChildrens = new Children 
  }

  parentWithChild() {
    this.dataParents.readFileParent(() => {
      this.dataChildrens.readFileChild(() => {

        this.dataParents.dataParent.map((parent, i) => {
          var childArr = []
          this.dataChildrens.dataChildren.map(child => {
            if (parent.last_name === child.family) {
              childArr.push(child.full_name)
            }
          })
          this.dataParents.dataParent[i].children = childArr
        })
        // console.log(JSON.stringify(this.dataParents))
        console.log(this.dataParents)
      })
    })
  }
}

// const parent = new Parent
// const children = new Children
// parent.readFileParent(function() {
//   children.readFileChild(function() {
//     console.log('========== data parent')
//     console.log(parent.dataParent)
//     console.log('========== data children')
//     console.log(children.dataChildren)
//   })
// })

const family = new Family()
family.parentWithChild()



module.exports = { Parent, Children, Family }