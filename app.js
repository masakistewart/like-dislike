

var Person = function(name, age){
    this.name = name;
    this.age = age;
    this.likes = [];
    this.dislikes = [];
    this.historyOfPple = [];
    this.allPeople = [];
};
var RANDOM = function(){ Math.floor(Math.random() * this.allPeople.length);}

Person.prototype.addPerson = function(userObject){
    this.allPeople.push(userObject);
};
Person.prototype.massAdd = function(){
    for(var i = 0; i < arguments.length; i++){
        this.addPerson(arguments[i]);
    }
}
Person.prototype.getRandom = function(){
    return this.allPeople[Math.floor(Math.random() * this.allPeople.length)];
}

Person.prototype.ratePerson = function(){
    var randomPerson = this.getRandom();
    choice = window.prompt("do you like or dislike" + radomPerson.name + " "  + randomPerson.age);
    if(choice === "like"){
        randomPerson.likes.push(this);
        this.historyOfPple.push(randomPerson())
    } else if(likeOrDislike === "dislike"){
        randomPerson.dislikes.push(this)
    }
}
