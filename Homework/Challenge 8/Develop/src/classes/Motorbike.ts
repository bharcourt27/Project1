// Importing Vehicle and Wheel classes
import { isWhiteSpaceLike } from 'typescript';
import Vehicle from './Vehicle.js';
import Wheel from './Wheel.js';

// TODO: The Motorbike class should extend the Vehicle class
class Motorbike extends Vehicle {
  vin: string;
  color: string;
  make: string;
  model: string;
  year: number;
  weight: number;
  topSpeed: number;
  wheels: Wheel[];
  towingCapacity: number;

  // Constructor that accepts the properties of the Motorbike class
  constructor(
    vin: string,
    color: string,
    make: string,
    model: string,
    year: number,
    weight: number,
    topSpeed: number,
    wheels: Wheel[] = []
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
    
    // Check if the wheels array has 2 elements; if not, create 2 new default Wheel objects
    this.wheels = wheels.length === 2 ? wheels : Array(2).fill(new Wheel(17, 'default')); // Assuming a default Wheel constructor
    this.towingCapacity = 0; // Initialize towing capacity
  }

  // Implement the wheelie method
  wheelie(): void {
    console.log(`Motorbike ${this.make} ${this.model} is doing a wheelie!`);
  }

  // Override the displayDetails method from the Vehicle class
  public displayDetails(): string {
    // Call the parent class's displayDetails method and append Motorbike-specific details
    return `VIN ${this.vin}, color ${this.color}, make ${this.make}, model ${this.model}, year ${this.year}, weight ${this.weight}, top speed ${this.topSpeed}`;
  }
}

// Export the Motorbike class as the default export
export default Motorbike;