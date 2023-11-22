/**
 * Car class
 * @constructor
 * @param {String} model
 */
//car constructor function
function Car(model){
    //properties at the beginning 
    this.currentSpeed = 0;
    this.model = model;
}  

//methods for the prototype
Car.prototype.accelerate = function(){
    this.currentSpeed += 1;
};

Car.prototype.brake = function(){
    this.currentSpeed = Math.max(0, this.currentSpeed - 1);
};

Car.prototype.toString = function(){
    return `Car model: ${this.model}, Current Speed: ${this.currentSpeed} mph`;
};

//  Create an instance, accelerate twice, brake once, and console log the instance.toString()
const myCar = new Car("Taurus");

myCar.accelerate();
myCar.accelerate();

myCar.brake();

console.log(myCar.toString());

/**
 * ElectricCar class
 * @constructor
 * @param {String} model
 */

//electriccar constructor function
function ElectricCar(model){
    //use car constructor for same properties
    Car.call(this, model);

    //additional properties for the electric car
    this.motor = "electric";
}

//copy car prototype
ElectricCar.prototype = Object.create(Car.prototype);

//creates a new constructor for electiccar only
ElectricCar.prototype.constructor = ElectricCar;

//override accelerate metho for the electric car
ElectricCar.prototype.accelerate = function() {
    //call parent accelerate class
    Car.prototype.accelerate.call(this);
    Car.prototype.accelerate.call(this);
};

//overide toString methofor the electric car
ElectricCar.prototype.toString = function() {
    return `Electric Car model: ${this.model}, Current Speed: ${this.currentSpeed} mph`;
}

//  Create an instance, accelerate twice, brake once, and console log the instance.toString()
const myElectricCar = new ElectricCar("Telsa");

myElectricCar.accelerate();

myElectricCar.brake();

console.log(myElectricCar.toString());