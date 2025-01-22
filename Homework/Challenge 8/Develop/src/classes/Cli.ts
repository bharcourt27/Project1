import inquirer from 'inquirer';
import Car from './Car';
import Truck from './Truck';
import Motorbike from './Motorbike';

class Cli {
  vehicles: (Car | Truck | Motorbike)[];
  selectedVehicleVin: string | undefined;

  static generateVin(): string {
    // Generate a mock VIN (e.g., a 17-character alphanumeric string)
    return Math.random().toString(36).substring(2, 19).toUpperCase().padEnd(17, "X");
  }

  constructor(vehicles: (Car | Truck | Motorbike)[]) {
    this.vehicles = vehicles
  }

  // start(): void {
  //   console.log("CLI started. Available vehicles:");
  //   this.vehicles.forEach((vehicle) => console.log(vehicle.displayDetails()));

  //   this.chooseVehicle();
  // }

  chooseVehicle(): void {
    // Check if there are any vehicles available to choose from
    if (this.vehicles.length === 0) {
      console.log("No vehicles available to select.");
      return; // Exit the method if there are no vehicles
    }

    inquirer
      .prompt([
        {
          type: 'list',
          name: 'selectedVehicleVin',
          message: 'Select a vehicle to perform an action on',
          choices: this.vehicles.map((vehicle) => {
            return {
              name: `${vehicle.vin} -- ${vehicle.make} ${vehicle.model}`, // Display VIN, make, and model
              value: vehicle.vin, // Use VIN as the value for selection
            };
          }),
        },
      ])
      .then((answers) => {
        // Set the selectedVehicleVin to the VIN of the selected vehicle
        this.selectedVehicleVin = answers.selectedVehicleVin;
        console.log(`You have selected vehicle with VIN: ${this.selectedVehicleVin}`);
        this.performActions(); // Call a method to handle actions for the selected vehicle
      })
      .catch((error) => {
        console.error("An error occurred while selecting a vehicle:", error);
      });
  }

  performActions(): void {
    if (!this.selectedVehicleVin) {
      console.log("No vehicle selected.");
      return;
    }

    // Implementation for performing actions on the selected vehicle
    console.log(`Performing actions on vehicle with VIN: ${this.selectedVehicleVin}`);
  }
}

export default Cli;