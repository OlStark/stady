const people = [

    {name:  "Иван", age:"30 лет", city: "Москва"},
  
    {name: "Сергей", age: "25 лет", city: "Санкт-Питербург"},
  
    {name: "Андрей", age: "40 лет", city: "Казань"},

    {name: "Георгий", age: "55 лет", city: "Краснодар"},

    {name: "Мария", age: "32 лет", city: "Сочи"},
  
  ];

 
const newPeople = people.map(person => `${person.name} (${person.age})`
);

console.log(newPeople);