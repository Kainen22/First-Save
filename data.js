const company = {
    name: "TechCorp",
    location: {
      city: "New York",
      address: {
        street: "5th Avenue",
        number: 1234,
      }
    }, 
    departments: [
      {
        name: "Engineering",
        employees: [
          { id: 1, name: "Alice", role: "Software Engineer" },
          { id: 2, name: "Bob", role: "DevOps Engineer" }
        ]
      },
      {
        name: "Sales",
        employees: [
          { id: 3, name: "Charlie", role: "Sales Manager" },
          { id: 4, name: "Dave", role: "Sales Associate" }
        ]
      }
    ],
    "company motto": "Innovate and Lead",
    ceo: {
      firstName: "Emily",
      lastName: "Smith",
      age: 45,
      contact: {
        email: "emily.smith@techcorp.com",
        phone: "555-6789"
      }
    }
  };
  

  let variableForCompanyName = company.name;

  console.log(variableForCompanyName)
  let b =  company.departments[0].employees[1].name
  console.log(b)

  //////////////////

  //array [] brackets. you can use "length" to calulate numeric values within
  //Objects = {} "Curly Braces"

  
let timesIWackInADay = [32,42,51,1,3,4,5,1,3,2,4,5,6,7,8,9];

let nums1to9 = [1,2,3,4,5,6,7,8,9];

console.log(nums1to9)

//length
//for loops
console.log(timesIWackInADay.length)

//for loops
//for loops let you do something a specific number of times
// "I want to multiply every number in this list by 2"

for(let i=0; i<timesIWackInADay.length; i++) {
    console.log((timesIWackInADay[i]) * 2)

}

//let timesIWackInADay = [32,42,51,1,3,4,5,1,3,2,4,5,6,7,8,9];

for (let i=0; i<timesIWackInADay.length; i++){

    console.log("the number is" +" "+ timesIWackInADay[i])

}

for(let i=0; i<timesIWackInADay.length; i++){
    console.log( (timesIWackInADay[i]) * 5)


}

let namesArray = ["Ava", "Elijah", "Priya", "Lucas", "Sofia", "Mateo", "Emma", "Arjun", "Mia", "Noah", "Zara", "Liam", "Aisha", "Ethan", "Chloe"];

//i want you to print out "My name is *whtever the nme is*"" using every name on the list
    

for (let i=0; i<namesArray.length; i++){
console.log("My name is "+ namesArray[i])
}

