const { newPerson } = require('./names');
const { newHobbiesArray } = require('./hobbies');

(function populatePerson() {
    const user = newPerson('Gabriele', 'Tuzzo');
    console.log(user);
    const { hobbies } = newHobbiesArray('Canto', 'Chitarra', 'GameDev');
    console.log(hobbies);

    user.hobbies = hobbies;
    console.log(user);
})();
