function cacheContainer() {
  const container = document.querySelector('#container');
  return container;
}

function cacheForm() {
  const parent = cacheContainer();
  const obj = {
    form: parent.querySelector('#form'),
    input: parent.querySelector('#input'),
    peoplecontainer: parent.querySelector('#peoplecontainer'),
  };
  return obj;
}

const cached = cacheForm();
export default cached;
