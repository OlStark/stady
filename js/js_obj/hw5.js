class Parent {
    constructor (name, turn) {
        this.name = name || 'Fierfly';
        this.turn = turn || 'off';
    }

    getInfo() {
        return `My ${this.name} stay on table and it's ${this.turn}`; 
    }
}

class Child extends Parent {
    constructor(device, name){
        super(name);
        this.device = device ? device : name;
 }	

 getInfo() {
    if (this.device) {
        return `My ${this.device} has a power of 100 watts`;
 } else {
        return super.getInfo();
 }
}
}

const fierfly = new Child('Fierfly');
console.log(fierfly.getInfo());
