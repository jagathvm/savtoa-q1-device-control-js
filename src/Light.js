// Import Device Class
import Device from "./Device.js";

// ----- Fan Device -----
class Light extends Device {
  // Method to start the device
  start() {
    // Check whether the device is ON
    if (!this.isOn()) {
      // Turn ON the device
      this._turnOn();
      // Print the output
      console.log("Light switched on!");
    }
  }

  // Method to stop the device
  stop() {
    // Check whether the device is ON
    if (this.isOn()) {
      // Turn OFF the device
      this._turnOff();
      // Print the output
      console.log("Light switched off!");
    }
  }
}

// Export Light Device
export default Light;
