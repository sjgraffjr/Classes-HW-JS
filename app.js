class Pet {
	constructor(name){
		this.name = name;
		this.owner = '';

	}
	setOwner(owner){
		this.owner = owner;
	}
}

class Dog extends Pet{
	constructor(price, name){
		super(name)
		this.price = price;
	}
	bark(){
		console.log("Bark")
	}
	chaseTail(){
		console.log("oh boy oh boy oh boy")
	}
	getPrice(){
		return price;
	}
}

const sparky = new Dog("200 dollars","Sparky");
console.log(sparky)
sparky.bark();
sparky.chaseTail();
sparky.getPrice();

class Cat extends Pet {
	constructor(price, name){
		super(name)
		this.price = price;
		}
	purr(){
		console.log("Purrrrr")
	}
	clean(){
		console.log("cleaning")
	}
	getPrice(){
		return price;
	}
	
}
const sprinkles = new Cat("100 dollars","Sprinkles");
console.log(sprinkles);
sprinkles.purr();
sprinkles.clean();
sprinkles.getPrice();

class Person {
	constructor(name){
		this.name = name;
		this.age  = 0;
		this.weight = 0;
		this.mood = 0;
		this.pets = [];
		this.bankAccount = 0;
	}
	getName(){
		return this.name;
	}
	getAge(){
		return this.age;
	}
	getWeigt(){
		return this.weight;
	}
	greet(otherPerson){
		console.log("hi " + otherPerson)
	}
	eat(){
		return this.weight  = this.weight += 1;
		return this.mood = this.mood += 1;
	}
	exercise(){
		return this.weight = this.weight -= 1;
	}
	age(){
		return this.age = this.age += 1;
		return this.weight = this.weight += 1;
		return this.mood = this. mood -= 1;
		return this.bankAccount = bankAccount += 10;
	}
	buyPet(pet){
		return this.pets.push(pet)
		return this.mood = this.mood += 10;
		return this.bankAccount =  getPrice()//had trouble with is



	}

	}
}


