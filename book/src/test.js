const a = ["ritik", 1, 1.555, true];
a.unshift('tanu')
console.log(a)


//array-length
const fruits = ["apple", "mango", "banana"];
let size = fruits.length;
console.log(size)


//array-at
const Cars = ["BMW", "Thar", "Porshe"];
// let cars = Cars.at(2);
// let cars = Cars[1];
for( let idx = 0 ; idx < Cars.length ; idx++){
console.log(Cars[idx]);
}


//array-join
const Phone = ["samsung", "oppo", "vivo"];
let phone = Phone.join("*");
console.log(phone);


//array-push,pop
const Vegetables = ["onion", "carrot", "potato"];
// let vegetables = Vegetables.push("KdiChol");
let vegetables = Vegetables.pop();
console.log(Vegetables);


//array-shift,unshift
const Birds = ["peacock", "owl", "eagle"]
// let birds=Birds.unshift('ostrich')
let birds = Birds.shift()
console.log(Birds)


//array-concat
const Girls = ["tanvi", "harkrit", "khuspreet"];
const Boys = ["shivam", "dinesh", "ankush"];
let myclass = Girls.concat(Boys);
console.log(myclass);


//array-flat
const myNumbers = [[1, 2], [3, 4], [5, 6]];
let mynumber = myNumbers.flat();
console.log(mynumber)


//array-slice
const Months = ["jan", "feb", "march","april"]
let month = Months.slice(1,3);
console.log(month)


// //array-splice(add,remove,remove)
const Shapes = ["square", "circle", "rounded-pill"];
let spliced = Shapes.splice(1, 0, "oval");
console.log(Shapes);


// //array-copywithin
const States = ["punjab", "haryana", "uttar pradesh"]
let states = States.copyWithin(1, 0);
console.log(States);


//array-string
const Fruits = ["apple", "mango", "banana"]
let string = Fruits.toString();
console.log(string);


//array-indexof
const Integer = [1, 2, 3, 1, 5]
// let index=Integer.indexOf(1);
// let index=Integer.lastIndexOf(1)
let index = Integer.includes(3);
console.log(index);


//array-find index
const EvenNumber = [2, 4, 6, 8, 10]
let position = EvenNumber.indexOf(8);
console.log(position);


//array find include
const laptop = ["hp", "dell", "apple"]
let lap = laptop.includes("hp");
console.log(lap);


//array find last-index(1,2)
const OddNumber = [1, 3, 5, 1, 7, 11]
// let space=OddNumber.lastIndexOf(1);
function myFunction(value, index, array) {
	return value > 3;
}
let space = OddNumber.find(myFunction)
console.log(space);


const Temp = [1, 2, 3, 4, 5, 6, 7, 8]
// let number=Temp.findLast(x=> x=>6);
let number = Temp.findLastIndex(x => x => 6);
console.log(number);





//object
const car = {
	type: "fait",
	model: "500",
	color: "white",
}
console.log("The car type is " + car.color);


const Person = {
	firstName: "harry",
	lastName: "porter",
	age: 55,
	id: 576,
	fullName: function () {
		return (this.firstName + " " + this.lastName).toUpperCase();

	}
};

console.log(Person.fullName());