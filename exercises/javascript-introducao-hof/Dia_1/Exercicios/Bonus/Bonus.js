const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

const dragonDamage = (dragon) => Math.floor(Math.random() * (dragon.strength - 15) + 15);

const warriorDamage = (warrior) => Math.floor(Math.random() * ( (warrior.strength - warrior.warriorDamage) - warrior.strength) + warrior.strength);

const mageAction = (mage) => {
  const mageDmg = Math.floor(Math.random() * ((mage.intelligence*2) - mage.intelligence) + mage.intelligence);
  return {
    hitDamage: mage.mana >= 15 ? mageDmg : 'Não possui mana suficiente!',
    manaLevel: mage.mana >= 15 ? mage.mana -= 15 : mage.mana = 0, 
  }
}

console.log(mageAction(mage));