type Person1 = { name: string; age: number; isProgrammer?: boolean };

const person1: Person1 = {
  name: "Aditya",
  age: 25,
  isProgrammer: true,
};

interface Person2 {
  name: string;
  age: number;
  isProgrammer?: boolean;
}

const person2: Person2 = {
  name: "Aditya",
  age: 25,
  isProgrammer: true,
};
