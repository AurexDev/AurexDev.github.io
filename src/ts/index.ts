import { getCookie, setCookie } from './cookies.js';

type Person = {
  name: string;
  age: number;
};

function greet(person: Person) {
  return 'Hello ' + person.name + ' Age: ' + person.age.toString();
}
const element = document.getElementById('hello');
setCookie('lulek', 'Name', 365);
if (element) {
  element.textContent = greet({
    name: getCookie('lulek') ?? 'No Name',
    age: 26,
  });
}
