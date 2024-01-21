const star: number = 10;

type Constant = typeof star;

function sayHi(name: string) {
  return name;
}

type FuncType = typeof sayHi;
