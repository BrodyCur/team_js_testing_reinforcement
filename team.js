function teamObj(name, level) {
  let obj = {};
  obj['teamName'] = name;
  obj['level'] = level;
  obj['points'] = 0;
  return obj;
}

let testTeam = teamObj('Unicron');

console.log(testTeam)

module.exports = teamObj;
