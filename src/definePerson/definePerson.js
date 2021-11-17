import dom from '../domCreator/dom';
import peopleObj from '../peopleArr/people';

function deletePerson(e) {
  console.log(e);
  console.log(e.target.parentNode.childNodes[0].textContent);
  e.target.parentNode.remove();
  peopleObj.deletePerson(e.target.parentNode.childNodes[0].textContent);
}

export default function definePerson(obj) {
  if (typeof obj !== 'object') return console.log('definePerson param must be an object');
  // takes a obj
  // make dom element with person.name
  const personCard = dom({ text: obj.name, classes: [obj.name] });

  // add person to the people array
  peopleObj.addPerson(obj.name, personCard);

  // make delete button
  personCard.appendChild(
    dom({
      tag: 'button',
      text: 'X',
      // delete button removes person from People array
      events: [{ type: 'click', handler: deletePerson }],
    })
  );

  return personCard;
}
