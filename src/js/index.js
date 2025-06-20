var _a;
import { getCookie, setCookie } from './cookies.js';
function greet(person) {
    return 'Hello ' + person.name + ' Age: ' + person.age.toString();
}
const element = document.getElementById('hello');
setCookie('lulek', 'Name', 365);
if (element) {
    element.textContent = greet({
        name: (_a = getCookie('lulek')) !== null && _a !== void 0 ? _a : 'No Name',
        age: 26,
    });
}
