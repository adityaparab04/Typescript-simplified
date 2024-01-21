type Car = {
  model: string;
  year: number;
};

const carYear = getCarYear("year", { model: "Tesla S", year: 2020 });

/* Throws error in below code */
// function getCarYear(key, car: Car) {
//   return car[key];
// }

/* use of keyof to solve */
function getCarYear(key: keyof Car, car: Car) {
  return car[key];
}

//group by example

type People = [];

function groupBy(key: keyof Person, people: People[]) {
  return people.reduce((grouped, person) => {
    if (grouped[person[key]] == null) grouped[person[key]] = [];
    grouped[person[key]].push(person);
    return grouped;
  }, {});
}
