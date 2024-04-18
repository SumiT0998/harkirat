// const users = '{"name":"sumit","age":25,"gender":"male"}'
// const user =JSON.parse(users);                                   //parsing
// console.log(user["gender"]);

// const user={
//     name:"sumit",
//     age:24,
//     gender:"male"
// }

// const final=JSON.stringify(user);       //stringify
// console.log(final);

function objectMethods(obj) {
  console.log("orignal object:", obj);

  let keys = Object.keys(obj);
  console.log("after object.keys:", obj);

  let values = Object.values(obj);
  console.log("after object.keys:", obj);

  let entries = Object.entries(obj);
  console.log("after entries:", obj);

  let hasProp = obj.hasOwnPropert("property");
  console.log("after has property:", hasProp);
}
