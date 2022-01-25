// 1. Подготовка данных

//JSON
const jsonString = `

{
  "list": [
   {
    "name": "Petr",
    "age": "20",
    "prof": "mechanic"
   },
   {
    "name": "Vova",
    "age": "60",
    "prof": "pilot"
   }
  ]
 }`;

// 2. Получение данных

const data = JSON.parse(jsonString);

const list = data.list;

// 3. Запись данных в результатирующий объект

const result = {
  list: [
    {
    name: list[0].name,
    age: Number(list[0].age),
    prof: list[0].prof,
    },
    {
    name: list[1].name,
    age: Number(list[1].age),
    prof: list[1].prof,
    }
  ]

};

console.log(result);
console.log(list);