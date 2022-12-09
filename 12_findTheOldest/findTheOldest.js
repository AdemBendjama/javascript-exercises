const findTheOldest = function(people) {
    //
    let oldestAge = 0; 
    let oldestPerson ;
    let age ;
    people.forEach(element => {
        if(element.yearOfDeath == undefined){
            //
            age = (new Date().getFullYear()) - element.yearOfBirth;
            if(age>oldestAge){
                oldestAge=age;
                oldestPerson ={
                    name: element.name,
                    yearOfBirth:element.yearOfBirth
                };
            }
        }else{
            //
            age = element.yearOfDeath - element.yearOfBirth;
            if(age>oldestAge){
                oldestAge=age;
                oldestPerson ={
                    name: element.name,
                    yearOfBirth:element.yearOfBirth
                };
            }
        }
        
    }); 


    return oldestPerson;


};
const people = [
    {
      name: "Carly",
      yearOfBirth: 2018,
    }
]
findTheOldest(people);
// Do not edit below this line
module.exports = findTheOldest;
