// ----- Base Device Class -----
class Device {
  // Private inner state
  #isOn = false;

  // Protected helper methods
  _turnOn() {
    this.#isOn = true;
  }

  _turnOff() {
    this.#isOn = false;
  }

  // Public method to check the state of the Device
  isOn() {
    return this.#isOn;
  }

  // Methods to be implemented by subclasses
  start() {
    throw new Error("start() must be implemented by subclasses!");
  }

  stop() {
    throw new Error("stop() must be implemented by subclasses!");
  }
}

// ----- Fan Device -----
class Fan extends Device {
  // Method to start the device
  start() {
    // Check whether the device is ON
    if (!this.isOn()) {
      // Turn ON the device
      this._turnOn();
      // Print the output
      console.log("Fan has started!");
    }
  }

  // Method to stop the device
  stop() {
    // Check whether the device is ON
    if (this.isOn()) {
      // Turn OFF the device
      this._turnOff();
      // Print the output
      console.log("Fan has stopped!");
    }
  }
}
