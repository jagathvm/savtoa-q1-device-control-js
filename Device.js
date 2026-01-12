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
}
