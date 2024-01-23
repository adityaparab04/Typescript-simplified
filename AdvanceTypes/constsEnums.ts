const obj1 = {
  name: "aditya",
  age: 24,
  sports: ["cricket", "football"],
} as const;

// obj1.name = "Rob" - gives error
obj1;

const sports = ["Football", "Soccer", "Cricket"] as const;

// sports.push("baseball"); - same throws error like above assignment on obj1

sports;

type SPORTS = {
  sports: (typeof sports)[number];
};

sports.forEach((sport) => {
  console.log(sport);
});
