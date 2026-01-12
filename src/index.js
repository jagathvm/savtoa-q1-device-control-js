// Import Light, Motor and Controller
import Light from "./Light.js";
import Motor from "./Motor.js";
import Controller from "./Controller.js";

// Create instances of Light and Motor devices
const light = new Light();
const motor = new Motor();

// Create instance of Controller
const controller = new Controller();

// Controller calls the operate method on devices
controller.operate(motor);
controller.operate(light);

// ----- Output -----
// Motor has started!
// Motor has stopped!
// Light switched on!
// Light switched off!
