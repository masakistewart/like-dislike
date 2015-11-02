

var Person = function(name, age){
    this.name = name;
    this.age = age;
    this.userId = 0;
    this.likes = [];
    this.dislikes = [];
};

var Engine = function(){
    this.users =[];
    this.currentUser = null;
}
var COUNTER = 0;
Engine.prototype.logIn = function(id){
    for(var i = 0; i < this.users.length; i++){
        if(this.users[i].userId === id){
            this.currentUser = this.users[i];
        }
    }
}

Engine.prototype.addPerson = function(userObject){
    COUNTER += 1
    userObject.userId = COUNTER;
    this.users.push(userObject);
};

Engine.prototype.massAdd = function(){
    for(var i = 0; i < arguments.length; i++){
        this.addPerson(arguments[i]);
    }
}

Engine.prototype.getRandom = function(){
    var RANDOM = Math.floor(Math.random() * 5);
    return this.users[RANDOM];
}

Engine.prototype.ratePerson = function(person){
    var randomPerson = this.getRandom();
    choice = window.prompt("do you like or dislike" + randomPerson.name + " " + randomPerson.age);
    if(choice === "like"){
        this.currentUser.likes.push(randomPerson);
    }
}

var p1 = new Person("Cairo", 22);
var p2 = new Person("Arian", 25);
var p3 = new Person("America", 24);
var p4 = new Person("Zac", 25);
var e = new Engine();
e.massAdd(p1, p2, p3, p4)
