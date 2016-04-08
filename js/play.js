

require('angular')


angular.module('game', [])
  .controller('GameController', function (){
    this.output = 'Welcome, what is your name';
    this.position = 0;
    this.health;
    this.mana;
    this.power;
    this.pack;
    this.enemy;
    this.enemyHealth;
    this.player;
    this.newEnemy;
    this.item;

    this.newPlayer = function(person){
      var newPlayer = new Wizard(person, 10, 50)
      this.player = newPlayer;
      this.output = 'Alright ' + this.player.name + ', let\'s begin. Enter the room to your left, or your right.'
      this.position += 1;
      this.health = this.player.hp;
      this.mana = this.player.mana;
      this.power = this.player.power;
      this.pack = this.player.items;
    }

    this.newRoom = function(room) {
      if (room == 'left') {
        var enemy = new MeltRat('Pete the meltrat', 5);
        this.newEnemy = enemy;
        this.position = 2;
        this.output = 'A MeltRat attacks!, defend yourself with magic';
        enemy.infect(this.player)
        this.health = this.player.hp;
        this.enemy = 1;
        this.enemyHealth = enemy.hp;
        console.log(this.position)
      } else if (room == 'right') {
        var potion = new Health('strong', 1, 50)
        this.potion = potion;
        this.output = 'You found a potion! If you want to drink it, type drink';
        potion.carry(this.player, potion)
        this.pack = this.player.items
        console.log(this.player.items)
        this.position = 'potion';
      } else {
        this.output = 'You fell down the stairs and died, game over'
        this.health = 0;
        this.position = 'dead';
      }
    }

    this.fight = function(attack){
      if (attack == 'magic'){
        this.output = 'Keep fighting!'
        this.player.attackPower(this.newEnemy)
        this.newEnemy.attack(this.player)
        this.health = this.player.hp;
        this.mana = this.player.mana;
        this.power = this.player.power;
        this.enemyHealth = this.newEnemy.hp;
        if(this.enemyHealth > 0) {
          this.position += 1;
        }
        else {
          this.output = 'Enemey defeated! Head forward or right'
          this.position = 4;
        }
      } else {
        this.output = 'You should\'ve used magic, idiot! Meltrat defeated you.'
        this.health = 0;
        this.position = 'dead'
      }
    }
    this.drink = function(potion){
      if(potion == 'drink') {
        this.output = 'You win! You are the healthiest wizard in town!'
        this.potion.use(this.player)
        this.pack = this.player.items;
        this.health = this.player.hp;
        this.position = 'done';
      } else {
        this.output = 'Idiot! You tripped, fell, and died.'
        this.health = 0;
        this.position = 'dead';
      }
    }
    this.lastRoom = function(room){
      if (room == 'forward'){
        this.output = "Forward was a terrible option! This room is full of Bees! You are dead!"
        this.health = -300;
        this.position = 'dead';
      } else if (room == 'right') {
        this.output = 'You found the treasure! Great job! You won the game!'
        var brokenBottle = new Weapon('Broken Bottle', 1, 5)
        brokenBottle.carry(this.player, brokenBottle)
        this.pack = this.player.items
        this.health = 70;
        this.position = 'done'
      } else {
        this.output = 'You\'ve crossed me for the last time, game over'
        this.health = 0;
        this.position = 'dead';
      }
    }
  })
