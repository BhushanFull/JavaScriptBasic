
var person = {}
Object.defineProperty(person, 'Name', {
    value: 'Bhushan',
    writable: false,
  });
  person.Name = 'Jai'
  console.log(person.Name)
