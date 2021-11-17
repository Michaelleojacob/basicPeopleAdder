import './style.css';
import makeForm from './forminput/forminput';
import definePerson from './definePerson/definePerson';

makeForm();

function forTesting() {
  const container = document.querySelector('#container');
  container.appendChild(definePerson({ name: 'mike' }));
  container.appendChild(definePerson({ name: 'sam' }));
  container.appendChild(definePerson({ name: 'david' }));
}
forTesting();
