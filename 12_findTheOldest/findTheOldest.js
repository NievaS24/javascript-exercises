const findTheOldest = function(people) {
    people.sort((a, b) => {
        let aAge, bAge;
        if (a.yearOfDeath != undefined) {
            aAge = a.yearOfDeath - a.yearOfBirth;
        } else {
            aAge = 2025 - a.yearOfBirth;
        }
        if (b.yearOfDeath != undefined) {
            bAge = b.yearOfDeath - b.yearOfBirth;
        } else {
            bAge = 2025 - b.yearOfBirth;
        }
        return aAge - bAge;
    });
    return people[people.length -1];
};

// Do not edit below this line
module.exports = findTheOldest;
