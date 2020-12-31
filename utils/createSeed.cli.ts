const fs = require('fs')

const seedName = process.argv[2]
const date = Date.now()
const template = `import { Connection } from "typeorm";

export default {
  name: "${seedName}",
  timeStamp: ${date},
  up: (connection: Connection) => {

  },
  down: (connection: Connection) => {

  },
}

`

fs.writeFile(`seeds/${date}-${seedName}.ts`, template, (err: Error) => {
  if (err) {
    console.log(err)
  } else {
    console.log('Success 🎉')
  }
})
