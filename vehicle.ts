// Define the Vehicle interface
interface Vehicle {
    make: string;
    model: string;
    year: number;
    start(): void;
}

// Implement the Car class that implements the Vehicle interface
class Car implements Vehicle {
    make: string;
    model: string;
    year: number;

    constructor(make: string, model: string, year: number) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    start(): void {
        console.log("Car engine started");
    }
}

// Create an instance of the Car class and initialize it with some values
const myCar = new Car("Toyota", "Corolla", 2021);

// Call the start method on the instance to verify the appropriate message is logged
myCar.start(); // This should log "Car engine started" to the console
