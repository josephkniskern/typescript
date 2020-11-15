export {};

// using object type to specify what will be in the object
// const person: {
//   name: string;
//   age: number;
// } = {
//   name: "Django Reinhardt",
//   age: 110,
// };

enum Role {
  ADMIN,
  READ_ONLY,
  AUTHOR,
}

const person = {
  name: "Django Reinhardt",
  age: 110,
  hobbies: ["Guitar", "Music"],
  role: Role.ADMIN,
};

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby);
}

if (person.role === Role.ADMIN) {
  console.log("is Admin");
}
