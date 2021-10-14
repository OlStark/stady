const arr = [1, 2, 3, 3] //Произвольный массив
let isEqual = true; //Переменная принимающая булиновое значение
const reference = arr[0]; //Конст равный первому элементу массива
for (let item of arr) {
               if (item !== reference) {
                              isEqual = false;
               }
}
console.log(isEqual)