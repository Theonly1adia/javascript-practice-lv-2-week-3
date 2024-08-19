// File: objectMethods.js

console.log("Object Methods Exercise");

// Example 1: Adding Methods to a Book Object
const book = {
  title: 'To Kill a Mockingbird',
  author: 'Harper Lee',
  pages: 281,
  read() {
    console.log(`${this.title} by ${this.author} has been read.`);
  },
  updatePages(newPages) {
    this.pages = newPages;
  }
};

console.log("Example 1: Book Object with Methods");
book.read();           // Output: To Kill a Mockingbird by Harper Lee has been read.
console.log(book.pages); // Output: 281
book.updatePages(300);
console.log(book.pages); // Output: 300

// TODO 1: Add a method to `movie` object
// Add a method named `watch` that logs a message: "You watched {movie.title}."
// Add another method named `updateYear` that updates the `year` property.
// Use `this` to access and modify the properties.

const movie = {
  title: "Don't Tell Mom the Babysitter's Dead",
  director: "Stephen Herek",
  year: 1991,
  watch() {
    console.log(`You watched ${movie.title}.`);
  },
  updateYear(newYear) {
    movie.year = newYear;
  }
};

console.log("Todo 1: Movie Object");
movie.watch(); //Output: "You watched Don't Tell Mom the Babysitter's Dead."
console.log(movie.year); //Output: 1991
movie.updateYear(1992); // Updates the year to 1992
console.log(movie.year); //Output: 1992


// Example 2: Adding Methods to a Pet Object
const pet = {
  name: 'Whiskers',
  species: 'Cat',
  age: 5,
  celebrateBirthday() {
    this.age += 1;
    console.log(`Happy Birthday ${this.name}! You are now ${this.age} years old.`);
  },
  rename(newName) {
    this.name = newName;
  }
};

console.log("\nExample 2: Pet Object with Methods");
pet.celebrateBirthday(); // Output: Happy Birthday Whiskers! You are now 6 years old.
pet.rename('Paws');
console.log(pet.name);  // Output: Paws

// TODO 2: Add a method to `city` object
// Add a method named `addPopulation` that increases the `population` property by a given number.
// Add another method named `rename` that updates the `name` property using `this`.

const city ={
  name: "San Pedro",
  population: 11770,
  country: "Belize",

  addPopulation(){
    this.population += 2000;
    console.log(`${this.name}'s population increased to ${this.population}. `)
  },
  rename(newName){
    this.rename = newName;
    console.log(`The new city will be called ${newName}`)
  }
};

console.log("\Todo 2: City Object");
city.addPopulation();
city.rename("Santa Theresa");
console.log(city.name);
// Example 3: Adding Methods to a Car Object
const car = {
  brand: 'Toyota',
  model: 'Corolla',
  year: 2021,
  drive() {
    console.log(`Driving a ${this.brand} ${this.model} (${this.year}).`);
  },
  updateYear(newYear) {
    this.year = newYear;
  }
};

console.log("\nExample 3: Car Object with Methods");
car.drive();        // Output: Driving a Toyota Corolla (2021).
car.updateYear(2023);
console.log(car.year); // Output: 2023

// TODO 3: Add a method to `computer` object
// Add a method named `upgradeRAM` that updates the `ram` property.
// Add another method named `describe` that logs a message with the `brand`, `processor`, and `ram` properties.

const computer = {
  brand: "Apple",
  processor: "M3",
  ram: 8,//number is in GB

  upgradeRam(newRam) {
    this.ram = newRam;
    console.log(`The PC's Ram was upgraded to ${newRam}`)
  },

  describe() {
    console.log(`This PC is an ${this.brand} ${this.processor} ${this.ram}`)
  }
}

console.log("Todo 3: Computer Object");
computer.describe();
computer.upgradeRam(12);
computer.describe();

 // Example 4: Adding Methods to a Product Object
const product = {
  name: 'Laptop',
  price: 999.99,
  inStock: true,
  applyDiscount(discount) {
    this.price -= discount;
    console.log(`Discount applied! New price is $${this.price}.`);
  },
  updateStock(status) {
    this.inStock = status;
  }
};

console.log("\nExample 4: Product Object with Methods");
product.applyDiscount(100); // Output: Discount applied! New price is $899.99.
console.log(product.price);  // Output: 899.99
product.updateStock(false);
console.log(product.inStock); // Output: false

// TODO 4: Add a method to `restaurant` object
// Add a method named `changeRating` that updates the `rating` property.
// Add another method named `reopen` that sets the `inStock` property to true.

const restaurant = {
  name: "The Ruby Slipper",
  type: "Breakfast",
  rating: 4.5,

  changeRating(newRating) {
    this.rating = newRating;
    console.log(`${this.name} rating has improved!`)
  },

  describe() {
    console.log(`${this.name}'s new rating is ${this.rating}`)
  },

  reopen() {
    this.instock = true;
    console.log(`${this.name} is now open.`)
  }
};

console.log("Todo 4: Restaurant Object");
restaurant.changeRating(4.7);
restaurant.describe();
restaurant.reopen();


// Example 5: Adding Methods to a Student Object
const student = {
  firstName: 'John',
  lastName: 'Doe',
  grade: 'A',
  updateGrade(newGrade) {
    this.grade = newGrade;
    console.log(`${this.firstName} ${this.lastName} is now in grade ${this.grade}.`);
  },
  fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
};

console.log("\nExample 5: Student Object with Methods");
student.updateGrade('B');  // Output: John Doe is now in grade B.
console.log(student.fullName()); // Output: John Doe

// TODO 5: Add a method to `house` object
// Add a method named `renovate` that increases the `size` property by a given number.
// Add another method named `changeAddress` that updates the `address` property.

const house = {
  address:"204 NW Bellflower St",
  size: 1587,//size in square feet
  hasGarage: true,

  renovate(additionalSize) {
    this.size += additionalSize; 
    console.log(`The house at ${this.address} has increased in size!`)
  },

  describe() {
    console.log(`The house located at ${this.address} is now ${this.size}.`)
  },

  changeAddress(newAddress) {
    this.address = newAddress;
    console.log("The address was updated.")
  }
};

console.log("Todo 5: House Object");
house.renovate(500);
house.describe();
house.changeAddress("208 NW Bellflower St");
house.describe();
