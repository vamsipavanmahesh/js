function custom(name, age){
	this.name = name;
	this.age = age;
};

var person = new custom("vamsi", 20);
console.log(person.name);
console.log(person.age);