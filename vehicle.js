// Implement the Car class that implements the Vehicle interface
var Car = /** @class */ (function () {
    function Car(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    Car.prototype.start = function () {
        console.log("Car engine started");
    };
    return Car;
}());
// Create an instance of the Car class and initialize it with some values
var myCar = new Car("Toyota", "Corolla", 2021);
// Call the start method on the instance to verify the appropriate message is logged
myCar.start(); // This should log "Car engine started" to the console
