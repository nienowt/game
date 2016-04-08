'use strict';

class Creature {
  constructor(name, strength) {
    this.name = name;
    this.strength = strength;
    this.hp = 100;
    this.items = {};
    this.carrying = 0;
  }

  attack(target){
    target.takeDamage(this.strength);
  }

  takeDamage(damage) {
    this.hp -= damage;
  }

  gainHealth(health) {
    this.hp += health;
  }
}

/// main character
 class Wizard extends Creature {
   constructor(name, strength, power){
     super(name, strength)
     this.power = power;
     this.mana = 25;
   }

   attackPower(target) {
     target.takeDamage(this.power);
     this.mana -= 1;
   }

   heal(target) {
     target.gainHealth(this.mana - this.power)
     this.mana -= 2;
   }

   gainMana(mana){
     this.mana += mana;
   }
 }


///enemies

 class MeltRat extends Creature{
   constructor(name, strength) {
     super(name, strength)
   }

   infect(target) {
     target.takeDamage(this.strength)
     target.strength -= 5;
   }

 }
