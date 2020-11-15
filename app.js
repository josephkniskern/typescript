// using object type to specify what will be in the object
// const person: {
//   name: string;
//   age: number;
// } = {
//   name: "Django Reinhardt",
//   age: 110,
// };
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
var person = {
    name: "Django Reinhardt",
    age: 110,
    hobbies: ["Guitar", "Music"],
    role: Role.ADMIN
};
console.log(person.name);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby);
}
if (person.role === Role.ADMIN) {
    console.log("is Admin");
}
