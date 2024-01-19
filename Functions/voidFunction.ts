/* void function without a return value */
function printName2(name: string) {
  console.log(name);
}

/* can also be manually be set as void  */
function printAge(age: number): void {
  console.log(age);
}

/* undefined return type for a function  */
function printSalary(salary: number) {
  console.log(salary);
  return undefined;
}
