var user = {};

user.hobbies = ["run", "read", "listen to music"];
user.name = "Juan";
user.age = 30;

console.log(user);
console.log(user.age);

var assistantManager = {
  rangeTilesPerTurn: 3,
  socialSkills: 4,
  technicalSkills: 3,
  managementSkills: 4,
  communicationSkills: 5,
  problemSolvingSkills: 4,
  teamPlayer: true,
  workUnderPressure: true,
  workInShifts: true,
  workInWeekends: true,
  workInHolidays: true,
  specialAbilities: ["leadership", "negotiation", "conflict resolution"],
};

console.log(assistantManager.socialSkills);
console.log(assistantManager.specialAbilities[0]);
console.log(assistantManager.specialAbilities);

var table = {};
table["name"] = "Table";
table["legs"] = 4;
table["material"] = "wood";
table["color"] = "brown";
table["price"] = 100;

console.log(table);
console.log(table["price"]);

var fruits = [];
fruits.push("apple");
fruits.push("banana");
console.log(fruits);
fruits.pop("banana");
console.log(fruits);



