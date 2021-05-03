function people(name, lastname, height) {
    this.name = name;
    this.lastname = lastname;
    this.height = height;
}

let peopleArray = [];

for (let i = 0; i < 6; i++) {
    let nameUser = prompt('Name:');
    let lastnameUser = prompt('lastname:');
    let heightUser = prompt('height in meters:');
    Number(heightUser);
    peopleArray.push(new people(nameUser, lastnameUser, heightUser));
}

const heightInCentimeters = person =>  {
    return {
        ...person,
        height: person.height * 100,
    };
}

let peopleHeightInCentimeters = peopleArray.map(heightInCentimeters)

console.log('people:', peopleArray);
console.log('heightPeopleInCentimeters:', peopleHeightInCentimeters);
