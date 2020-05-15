// question 4
console.log(8.5 + 7.5);

// q 5
console.log("q5: " + 6 * 4);

// q 6
console.log("Friday");

// q 7 
var ant = "Burt";
console.log("Ant's value is: " + ant)

// q 8
var numberOfStrings = 4;
console.log("numberOfStrings value: " + numberOfStrings);

// q 9
var isEmpty = false;
console.log("isEmpty value: " + isEmpty);

// q 10
console.log(typeof(ant));
console.log(typeof numberOfStrings);
console.log(typeof isEmpty);

// q 11
var joinedWord = "ware" + " " + "house";
console.log(joinedWord);

// q 12
console.log("bear" === "bear");

// q 13
console.log("11" === 11);

// q 14
console.log("true" === true);

// q 15
var typeofMonkey = typeof("monkey");
var typeofGiraffe = typeof("giraffe");
console.log(typeofMonkey === typeofGiraffe);

// q 16
console.log(7 >= 7);

// q 17
var firstNumber = 5;
var secondNumber = 6;

if(firstNumber <= secondNumber) {
    console.log("FirstNumber is greater than or equal to secondNumber");
}
else {
    console.log("No it isn't");
}

// q 18
var minimumAge = 10;
var userAge = 11;

if(userAge < minimumAge) {
    console.log("The user is too young");
}
else {
    console.log("The user is old enough");
}

// q 19
var ageAsString = "11";
var ageAsNumber = 11;

if(ageAsString === ageAsNumber) {
    console.log("These variables are equal");
}

// q 20

var animalType = "elephant";

if(animalType === "elephant") {
    console.log("The animal is large");
}
else if(animalType === "hedgehog") {
    console.log("The animal is small");
}
else if (animalType === "ant") {
    console.log("The animal is tiny");
}
else {
    console.log("The animal size is unknown");
}

// q 21

var animalType2 = "duck";

switch(animalType2) {
    case "elephant":
        console.log("The animal 2 is large");
        break;
    case "hedgehog":
        console.log("The animal 2 is small");
        break;
    case "ant":
        console.log("The animal 2 is tiny");
        break;
    default:
        console.log("The animal 2 size is unknown");
}

// q 22
for(var count = 2; count <= 10; count++) {
    console.log("count: " + count);
}

// q 23
for(var i = 5; i <= 30; i++) {
    console.log("i: " + i);
}

// q 24 and 25
var animals = ["dog", "cat", "frog", "pig", "cow"];

// console.log(animals[0]);
// console.log(animals[1]);
// console.log(animals[2]);

console.log(animals[5])

console.log("length of the animals array is: " + animals.length);

for(var i = 0; i < animals.length; i++) {
    console.log(i);
    console.log(animals[i]);
}

// q 26
var numbers = [11, 45, 89, 13];

console.log(numbers.length);

for(var i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}

// q 27
var mixedArray = [true, "red", 14, "blue", 28, false];

var lengthOfArray = mixedArray.length;

for(var count = 0; count < lengthOfArray; count++) {
    console.log(mixedArray[count]);
}




