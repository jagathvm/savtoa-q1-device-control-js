// Import Fan, Controller
import Fan from "./Fan.js";
import Controller from "./Controller.js";

// Create instance of Fan device
const fan = new Fan();

// Create instance of Controller
const controller = new Controller();

// Controller calls the operate method on device
controller.operate(fan);

// ----- Output -----
// Fan has started!
// Fan has stopped!

// // Create instance of Device
// const device = new Device();

// // Calling start method directly on the device
// device.start();

// // ----- Output -----
// // Error: start() must be implemented by subclasses!
