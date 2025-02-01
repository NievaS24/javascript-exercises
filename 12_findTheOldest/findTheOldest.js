const getAge = function (birth, death) {
    if (!death){
         death = new Date().getFullYear();
    }
    return death - birth;
}

const findTheOldest = function(people) {
    people.sort((prevPerson, currPerson) =>  getAge(prevPerson.yearOfBirth, prevPerson.yearOfDeath) - getAge (currPerson.yearOfBirth, currPerson.yearOfDeath));
    return people[people.length - 1];
};

// Do not edit below this line
module.exports = findTheOldest;
