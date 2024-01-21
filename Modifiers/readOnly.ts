type Human = {
  requires: readonly ["Oxygen", "Water", "Sleep", "Food"];
  readonly mortal: boolean;
  social: readonly ["true", "false"];
};

const human: Human = {
  requires: ["Oxygen", "Water", "Sleep", "Food"],
  mortal: true,
  social: ["true", "false"],
};

// human.mortal = false; cannot be changed
