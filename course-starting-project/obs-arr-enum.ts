// const person: {
//   name: string;
//   age: number;
//   hobbies: string[];
//   role: [number, string]; //tuple type
// } = {
//   name: "Max",
//   age: 30,
//   hobbies: ['Sports', 'Cooking'],
//   role: [2, 'author']
// }
//enum assigns labels to numbers
// admin = 0
// readonly = 1
// author = 2
// enum Role { ADMIN, READ_ONLY, AUTHOR};
// 5, 6, 7
// enum Role { ADMIN = 5, READ_ONLY, AUTHOR};
enum Role { ADMIN = 'ADMIN', READ_ONLY = 100, AUTHOR = 'AUTHOR' };

const person = {
  name: "Max",
  age: 30,
  hobbies: ['Sports', 'Cooking'],
  role: Role.ADMIN
}

// person.role.push('admin');
// person.role[1] = 10;

// person.role = [0, 'admin'];

let favoriteActivities: string[];
// let favoriteActivities: any[];

console.log(person.name)

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase())
}