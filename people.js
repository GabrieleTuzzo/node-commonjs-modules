const { newPerson } = require('./names');
const { newHobbiesArray } = require('./hobbies');

function populatePerson(userObj) {
    const user = newPerson(userObj.firstName, userObj.lastName);
    // console.log(user);
    const { hobbies } = newHobbiesArray(
        userObj.hobbieOne,
        userObj.hobbieTwo,
        userObj.hobbieThree
    );
    // console.log(hobbies);

    user.hobbies = hobbies;
    return user;
}

const userData = process.argv.slice(2);
// console.log(userData);
const userObj = {
    firstName: userData[0],
    lastName: userData[1],
    hobbieOne: userData[2],
    hobbieTwo: userData[3],
    hobbieThree: userData[4],
};
// console.log(userObj);

const newUser = populatePerson(userObj);

console.log('New user created: ', newUser);
