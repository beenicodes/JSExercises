let firstexercise = "Exercise 1";
console.log(firstexercise);

const variableA = 20;
const variableB = 80;
console.log(variableA);
console.log(variableB);

const sum = variableA + variableB;
console.log(sum);

const product = sum * 100;
console.log(product);

let remainder = 10000 % 40;
console.log(remainder);

let isRemainder0 = (remainder === 0) ? true : false;
console.log(isRemainder0);

let secondexercise = "Exercise 2";
console.log(secondexercise);

let phrase = "trafficlight"
console.log(phrase);

let color;

if (phrase === "stop"){
    color = "red";
}

else if (phrase === "slow"){
    color = "yellow";
}

else if (phrase === "go"){
    color = "green";
}

else {
    color = "purple";
}

console.log(color);

let thirdexercise = "Exercise 3";
console.log(thirdexercise);

let fourthexercise = "Exercise 4";
console.log(fourthexercise);

const planets = ['The Moon','Venus', 'Earth', 'Mars', 'Jupiter'];
console.log(planets);

planets.shift();
console.log(planets);

planets.push("Saturn");
console.log(planets);

planets.unshift("Mercury");
console.log(planets);

let fifthexercise = "Exercise 5";
console.log(fifthexercise);

let MyArray = ["pencil", "book", "laptop", "chair", "lamp", "phone", "watch", "shoes", "hat", "umbrella", "camera", "purse", "sunglasses", "wallet", "keys"];
console.log(MyArray);

let NewArray = MyArray.slice(0, -1);
console.log(NewArray);

let AddedItem = MyArray.concat("jewellery");
console.log(AddedItem);

// position of first item
let firstitem = 0;

// position of middle item
let middleitem = Math.floor(MyArray.length / 2);

// position of last item
let lastitem = MyArray.length - 1;

console.log("First item:", MyArray[0]);
console.log("Middle item:", MyArray[middleitem]);
console.log("Last item:", MyArray[MyArray.length - 1]);

// modifying: laptop, phone, watch into capital letters

let capitallaptop = MyArray.indexOf("laptop");
let capitalphone = MyArray.indexOf("phone");
let capitalwatch = MyArray.indexOf("watch");

MyArray[capitallaptop] = MyArray[capitallaptop].toUpperCase();
MyArray[capitalphone] = MyArray[capitalphone].toUpperCase();
MyArray[capitalwatch] = MyArray[capitalwatch].toUpperCase();

console.log(MyArray[capitallaptop]);
console.log(MyArray[capitalphone]);
console.log(MyArray[capitalwatch]);

let sixthexercise = "Exercise 6";
console.log(sixthexercise);

const airplaneSeats = [
    ['Ruth', 'Anthony', 'Stevie'],
    ['Amelia', 'Pedro', 'Maya'],
    ['Xavier', 'Ananya', 'Luis'],
    ['Luke', 'Hugo', 'Deniz'],
    ['Rin', 'Sakura', 'Francisco']
];

console.log(airplaneSeats);