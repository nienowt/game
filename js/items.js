'use strict';

class Item{
  constructor(name, consumable, weight){
    this.name = name;
    this.consumable = consumable;
    this.weight = weight;
  }

  carry(target, item){
    target.items[this.name] = item;
  }

  discard(target, item) {
    delete target.items[this.name];
  }
}



class Health extends Item {
  constructor(name, weight, power) {
    super(name, weight);
    this.consumable = true;
    this.power = power;
  }
  use(target){
    target.gainHealth(this.power)
    this.discard(target, this)
  }
}

class Weapon extends Item{
  constructor(name, weight, power){
    super(name, weight);
    this.consumable = false;
    this.power = power;
  }

  use(target) {
    target.takeDamage(this.power)
  }
}
