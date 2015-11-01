var Person = function(name, age){
    this.name = name;
    this.age = age;
    this.likes = [];
    this.dislikes = [];
};

var Engine = function(){
    this.allPeople = [];
};
Engine.prototype.addPerson = function(userObject){
    this.allPeople.push(userObject);
};
Engine.prototype.massAdd = function(){
    for(var i = 0; i < arguments.length; i++){
        this.addPerson(arguments[i]);
    }
}
Engine.prototype.getRandom = function(){
    var random = Math.floor(Math.random() * this.allPeople.length);
    return this.allPeople[random];
}

Engine.prototype.ratePerson = function(userObject){
    var person =  this.getRandom();
}


