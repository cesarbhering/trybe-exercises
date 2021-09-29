const fs = require('fs');

function createFile(name, content){
  fs.writeFileSync(name, content, "utf8");
  return "OK";
}

createFile("teste123.txt", "cesar teste cesar teste");

module.exports = {createFile};