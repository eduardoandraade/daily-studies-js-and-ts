const Character = require("./Character.js");

class Thief extends Character {
    attack(targetCharacter) {
        targetCharacter.lifePts -= (this.attackPts - targetCharacter.defensePts) * 2
    }
}

module.exports = Thief