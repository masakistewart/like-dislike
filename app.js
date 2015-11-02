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
    if(this.currentUser === null){
        for(var i = 0; i < this.users.length; i++){
            if(this.users[i].userId === id){
                this.currentUser = this.users[i];
                return this.users[i].name + " Is logged in"
            }
        }
    } else {
        console.log("Already logged in");
    }
}

Engine.prototype.addPerson = function(userObject){
    COUNTER += 1
    userObject.userId = COUNTER;
    this.users.push(userObject);
    return userObject.name + " with an id of " + userObject.userId
};

Engine.prototype.massAdd = function(){
    for(var i = 0; i < arguments.length; i++){
        this.addPerson(arguments[i]);
    }
}

Engine.prototype.getRandom = function(){
    var RANDOM = Math.floor(Math.random() * this.users.length);
    return this.users[RANDOM];
}

Engine.prototype.ratePerson = function(person){
    var randomPerson = this.getRandom();
    choice = window.prompt("do you 'like' or 'dislike' " + randomPerson.name + " " + randomPerson.age);
    if(choice === "like"){
        this.currentUser.likes.push(randomPerson);
    }
}

var p1 = new Person("S1ler", 22);
var p2 = new Person("Flubber", 25);
var p3 = new Person("Xercon", 24);
var p4 = new Person("Xenre", 25);
var e = new Engine();
e.massAdd(p1, p2, p3, p4);
