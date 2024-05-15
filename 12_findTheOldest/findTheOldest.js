function getAge(death, birth) {
    return death ? death - birth : new Date().getFullYear() - birth;
}
const findTheOldest = function(people) {
    return people.reduce((oldest, currPerson) => {
        const oldestAge = getAge(oldest.yearOfDeath, oldest.yearOfBirth);
        const currAge = getAge(currPerson.yearOfDeath, currPerson.yearOfBirth);
        return oldestAge < currAge ? currPerson : oldest;
    });
};

// Do not edit below this line
module.exports = findTheOldest;
