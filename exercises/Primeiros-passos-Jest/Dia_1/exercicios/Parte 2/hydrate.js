const hydrate = (string) => {
  return string.match(/\d+/g) == 1 ? '1 copo de água' : `${string.match(/\d+/g).reduce((acc, curr) => acc + parseInt(curr),0)} copos de água`
}

module.exports = hydrate;