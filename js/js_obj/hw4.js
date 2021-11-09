function ElectricalDevice(name, turn) {
    this.name = name;
    this.turn = turn;
};

ElectricalDevice.prototype.getDescription = function(power, size, location) {
  console.log(`Has a power ${power} w, it's ${size} and loceited on ${location}`);
};

function SmartDevice(name, mind){
  this.name = name,
  this.mind = mind
}

SmartDevice.prototype = new ElectricalDevice();


const speaker = new SmartDevice('Alisa', 'smart');
const lamp = new ElectricalDevice('Firefly', 'off');

speaker.getDescription(100, 'small', 'table');
lamp.getDescription(70, 'medium', 'on floor')

console.log(speaker, lamp);