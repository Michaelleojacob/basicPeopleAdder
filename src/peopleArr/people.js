function People() {
  const peopleArr = [];

  function getPeople() {
    return peopleArr;
  }

  function addPerson(name, card) {
    peopleArr.push({ name, card });
    console.log(...getPeople());
  }

  function deletePerson(pToDelete) {
    const position = peopleArr.map((item) => item.name).indexOf(pToDelete);
    peopleArr.splice(position, 1);
    console.log(...getPeople());
    return peopleArr;
    // uncomment line below once done testing.
    // return peopleArr.splice(position, 1);
  }

  return { getPeople, addPerson, deletePerson };
}

const peopleObj = People();

export default peopleObj;
