function greeter(person) {
    return "By, " + person.firstName + " " + person.lastName;
}
var user = { firstName: 'Angel', lastName: 'Reyes' };
var greetingElement = document.getElementById('greeting-output');
greetingElement.textContent = greeter(user);
