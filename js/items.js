'use strict';

function Item(name, consumable, weight){
  this.name = name;
  this.consumable = consumable;
  this.weight = weight;
}

Item.prototype.carry = function(target, item){
  target.items[this.name] = item;
}

Item.prototype.discard = function(target, item) {
  delete target.items[this.name];
}



function Health(name, weight, power) {
  Item.call(this, name, weight);
  this.consumable = true;
  this.power = power
}

Health.prototype = new Item();

Health.prototype.use = function(target){
  target.gainHealth(this.power)
  this.discard(target, this)
}



function Weapon(name, weight, power){
  Item.call(this, name, weight);
  this.consumable = false;
  this.power = power;
}

Weapon.prototype = new Item();

Weapon.prototype.use = function(target) {
  target.takeDamage(this.power)
}
