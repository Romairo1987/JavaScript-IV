/* 

Prototype Refactor

1. Copy and paste your code or the solution from yesterday

2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

*/

  
// function GameObject(attribute) {
    // this.createdAt = attribute.createdAt;
    // this.name = attribute.name;
    // this.dimensions = attribute.dimensions;
//   }
  
//   GameObject.prototype.destroy = function() {
    // return `${this.name} was removed from the game.`;
//   }
 
class GameObject {
    constructor(attribute){
        this.createdAt = attribute.createdAt;
        this.name = attribute.name;
        this.dimensions = attribute.dimensions;
    }
    destroy(){
        return `${this.name} was removed from the game.`
    }
}

//   function CharacterStats(charAtt) {
//     GameObject.call(this, charAtt);
    // this.healthPoints=charAtt.healthPoints
//   };
//   CharacterStats.prototype=Object.create(GameObject.prototype);
//   CharacterStats.prototype.takeDamage=function(){
    // return `${this.name} took damage.`
//   };


class CharacterStats extends GameObject{
    constructor(charAtt){
        super(charAtt);
        this.healthPoints=charAtt.healthPoints;
    }
    takeDamage(){
        return `${this.name} took damage.`  
    }
}
  
  
//   function Humanoid(Humanoidatt){
//     CharacterStats.call(this,Humanoidatt);
    // this.team=Humanoidatt.team;
    // this.weapons=Humanoidatt.weapons;
    // this.language=Humanoidatt.language;
//   };
//   Humanoid.prototype=Object.create(CharacterStats.prototype);
//   Humanoid.prototype.greet = function () {
    // return `${this.name} said a greeting in ${this.language}`;
//   };

class Humanoid extends CharacterStats{
    constructor(Humanoidatt){
        super(Humanoidatt);
        this.team=Humanoidatt.team;
        this.weapons=Humanoidatt.weapons;
        this.language=Humanoidatt.language;
    }
    greet(){
        return `${this.name} said a greeting in ${this.language}`;
    }
}
  
  
//   function Villain(villainatt){
//     Humanoid.call(this,villainatt);
//   };
//   Villain.prototype=Object.create(Humanoid.prototype);
  
class Villain extends Humanoid {
    constructor(villainatt){
        super(villainatt);
    }
}


  
//   function Hero(Heroatt){
//     Villain.call(this,Heroatt);
//   };
//   Hero.prototype=Object.create(Humanoid.prototype);
//   Hero.prototype.fight=function(){
    // let score= newHero.healthPoints - newVillain.healthPoints;
    // if(score <= 0 ){
    //   return `game over`
    // }else {
    //   return `${this.newVillain} still alive and has ${score} left`
    // }
   
//   };
class Hero extends Villain{
    constructor(Heroatt){
        super(Heroatt);
    }
    fight(){
        let score= newHero.healthPoints - newVillain.healthPoints;
        if(score <= 0 ){
          return `game over`
        }else {
          return `${this.newVillain} still alive and has ${score} left`
        } 
    }
}
  

    const newHero = new Humanoid({
      createdat: new Date(),
      healthPoints:7,
      name:'ramy',
      team:'pubg',
      weapons:['m24','g29']
    })
  
    const newVillain = new Humanoid({
      createdat: new Date(),
      healthPoints:3,
      name:'samer',
      team:'horriors',
      weapons:['akm','mc8']
    })
  
    const mage = new Humanoid({
      createdAt: new Date(),
      dimensions: {
        length: 2,
        width: 1,
        height: 1,
      },
      healthPoints: 5,
      name: 'Bruce',
      team: 'Mage Guild',
      weapons: [
        'Staff of Shamalama',
      ],
      language: 'Common Tongue',
    });
  
    const swordsman = new Humanoid({
      createdAt: new Date(),
      dimensions: {
        length: 2,
        width: 2,
        height: 2,
      },
      healthPoints: 15,
      name: 'Sir Mustachio',
      team: 'The Round Table',
      weapons: [
        'Giant Sword',
        'Shield',
      ],
      language: 'Common Tongue',
    });
  
    const archer = new Humanoid({
      createdAt: new Date(),
      dimensions: {
        length: 1,
        width: 2,
        height: 4,
      },
      healthPoints: 10,
      name: 'Lilith',
      team: 'Forest Kingdom',
      weapons: [
        'Bow',
        'Dagger',
      ],
      language: 'Elvish',
    });
  
    console.log(mage.createdAt); // Today's date
    console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
    console.log(swordsman.healthPoints); // 15
    console.log(mage.name); // Bruce
    console.log(swordsman.team); // The Round Table
    console.log(mage.weapons); // Staff of Shamalama
    console.log(archer.language); // Elvish
    console.log(archer.greet()); // Lilith offers a greeting in Elvish.
    console.log(mage.takeDamage()); // Bruce took damage.
    console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.
   
  
  

