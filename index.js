'use strict'

// const _ = require('lodash')
const fs = require('fs')
const path = require('path')
// const readline = require('readline')
const vorpal = require('vorpal')
// const normal = 'not Kebab Case'
// console.log(_.kebabCase(normal))
const cli = vorpal()

cli
  .command('dump <filename>', 'Dumps the given file to the console')
  .action(function (args, callback) {
    fs.readFile(path.resolve(__dirname, args.filename), (err, data) => {
      if (err) {
        this.log(err)
      } else {
        this.log(data.toString())
      }
      callback()
    })
  })

cli
  .show()

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// })
// rl.question('What file do you want to see? ', (filename) => {
//   fs.readFile(path.resolve(__dirname, filename), (err, data) => {
//     if (err) {
//       console.log(err)
//     } else {
//       console.log(data.toString())
//     }
//     rl.close()
//   })
// })
