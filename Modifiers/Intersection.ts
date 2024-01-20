// Intersection modifier
type Person4 = {
  name: string;
  age: number;
};

type PersonWithId = Person & { id: string };

const person5: Person4 = { name: "Aditya", age: 25 };
const person6: PersonWithId = { id: "jhsdafkjha", name: "Aditya", age: 25 };

interface Employee {
  name: string;
  salary: number;
}

interface EmployeeWithDepartment extends Employee, Person4 {
  department: string;
}

const emp: EmployeeWithDepartment = {
  name: "Aditya",
  salary: 100000,
  age: 25,
  department: "Sodtware",
};
