'use strict';

 function Creature(name, strength) {
  this.name = name;
  this.strength = strength;
  this.hp = 100;
  this.items = {};
  this.carrying = 0;
}

Creature.prototype.attack = function(target){
  target.takeDamage(this.strength);
}

Creature.prototype.takeDamage = function(damage) {
  this.hp -= damage;
}

Creature.prototype.gainHealth = function(health) {
  this.hp += health;
}

/// main character
 function Wizard(name, strength, power){
  Creature.call(this, name, strength)
  this.power = power;
  this.mana = 25;
}

Wizard.prototype = new Creature();

Wizard.prototype.attackPower = function(target) {
  target.takeDamage(this.power);
  this.mana -= 1;
}

Wizard.prototype.heal = function(target) {
  target.gainHealth(this.mana - this.power)
  this.mana -= 2;
}

Wizard.prototype.gainMana = function(mana){
  this.mana += mana;
  }

function Astronaut(name, strength, power){
  Creature.call(this, name, strength)
  this.power = power;
  this.energy = 10;
}

Astronaut.prototype = new Creature();

Astronaut.prototype.attackPower = function(target) {
  target.takeDamage(this.power);
  this.energy -= 1;
}

///enemies

 function MeltRat(name, strength) {
  Creature.call(this, name, strength)
}

MeltRat.prototype = new Creature();

MeltRat.prototype.infect = function(target) {
  target.takeDamage(this.strength)
  target.strength -= 5;
}
