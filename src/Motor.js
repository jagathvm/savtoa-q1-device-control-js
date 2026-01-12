// Import Device Class
import Device from "./Device.js";

// ----- Fan Device -----
class Motor extends Device {
  // Method to start the device
  start() {
    // Check whether the device is ON
    if (!this.isOn()) {
      // Turn ON the device
      this._turnOn();
      // Print the output
      console.log("Motor has started!");
    }
  }

  // Method to stop the device
  stop() {
    // Check whether the device is ON
    if (this.isOn()) {
      // Turn OFF the device
      this._turnOff();
      // Print the output
      console.log("Motor has stopped!");
    }
  }
}

// Export Motor Device
export default Motor;
