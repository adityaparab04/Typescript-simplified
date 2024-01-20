/* Union Modifiers */
let var2: number | string = "aditya";

type Person3 = {
  name: string;
  age: number;
};

type Todo = {
  name: string;
  status: "Complete" | "Incomplete" | "Draft";
};

type TodoPerson = Person3 | Todo;

const todo: TodoPerson = { name: "Laundary", status: "Complete" };

const person4: TodoPerson = { name: "Aditya", age: 25 };
