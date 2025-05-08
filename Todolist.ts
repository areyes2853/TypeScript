interface Person {
  firstName: string;
  lastName: string;
}
 
function greeter(person: Person) {
  return "By, " + person.firstName + " " + person.lastName;
}
 
let user = {firstName:'Angel', lastName:'Reyes'};
const greetingElement = document.getElementById('greeting-output');
greetingElement.textContent = greeter(user);