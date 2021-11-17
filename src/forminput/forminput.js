import cached from '../queryObj/queryObj';
import definePerson from '../definePerson/definePerson';

function handleFormSubmit(e) {
  e.preventDefault();
  const { input, peoplecontainer } = cached;
  const person = definePerson({ name: input.value });
  peoplecontainer.appendChild(person);
  input.value = '';
}

export default function makeForm() {
  const { form } = cached;
  form.addEventListener('submit', handleFormSubmit);
  return form;
}
