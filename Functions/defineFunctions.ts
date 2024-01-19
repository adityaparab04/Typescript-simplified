/* declaring a function with types in params */
function printName(name: string, age: number) {
  console.log(name, age);
}

/* declaring a function with return type declared */
function sum(num1: number, num2: number): number {
  return num1 + num2;
}

/* creating an interface for object and sending it to the function */
interface Person {
  name: string;
  age: number;
}

function printPerson(person: Person) {
  return person.name;
}

let person: Person = { name: "aditya", age: 25 };

printPerson({ name: "aditya", age: 25, hobby: "swimming" });
printPerson(person);

/* creating the object type in parameter itself and then calling the function to pass the  */
function printPerson2(person: { name: string }) {
  return person.name;
}

let person3 = { name: "aditya", age: 25 };

printPerson2(person3);
