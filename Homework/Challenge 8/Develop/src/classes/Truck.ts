import Vehicle from './Vehicle.js';
import Motorbike from './Motorbike.js';
import Car from './Car.js';
import Wheel from './Wheel.js';
import AbleToTow from '../interfaces/AbleToTow.js';

// The Truck class extends the Vehicle class and implements the AbleToTow interface
class Truck extends Vehicle implements AbleToTow {
  vin: string;
  color: string;
  make: string;
  model: string;
  year: number;
  weight: number;
  topSpeed: number;
  wheels: Wheel[];
  towingCapacity: number;

  // Constructor that accepts the properties of the Truck class
  constructor(
    vin: string,
    color: string,
    make: string,
    model: string,
    year: number,
    weight: number,
    topSpeed: number,
    wheels: Wheel[],
    towingCapacity: number
  ) {
    
    // Call the parent class constructor
    super();

    this.vin = vin;
    this.color = color;
    this.make = make;
    this.model = model;
    this.year = year;
    this.weight = weight;
    this.topSpeed = topSpeed;

    // Check if the wheels array has 4 elements; if not, create 4 new default Wheel objects
    this.wheels = wheels.length === 4 ? wheels : Array(4).fill(new Wheel(18, 'default')); // Assuming a default Wheel constructor
    this.towingCapacity = towingCapacity;
  }
  tow(vehicle: Truck | Motorbike | Car): void {
    if (vehicle.weight <= this.towingCapacity) {
      console.log(`Towing ${vehicle.make} ${vehicle.model} with VIN ${vehicle.vin}.`);
    } else {
      console.log(`Cannot tow ${vehicle.make} ${vehicle.model} with VIN ${vehicle.vin} because it exceeds the towing capacity.`);
    }
  }

  // Implement the tow method from the AbleToTow interface
  ableToTow(load: number): string {
    if (load <= this.towingCapacity) {
      return `The vehicle is being towed.`;
    } else {
      return `The vehicle is too heavy to be towed.`;
    }
  }

  // Override the displayDetails method from the Vehicle class
 
    // Call the parent class's displayDetails method and append Truck-specific details
    
  // Override the printDetails method from the Vehicle class
    override printDetails(): void {
    super.printDetails();
      console.log(`VIN: ${this.vin}`);
    }
}

// Export the Truck class as the default export
export default Truck;