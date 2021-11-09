const car = {

    color: 'red',
    model: 'toyoya',
    year: 2001,
};

const charCar = function() {

    for(let key in car) {

    if(car.hasOwnProperty(key)) {

      console.log(key);
      }
    } 
}

charCar(car);