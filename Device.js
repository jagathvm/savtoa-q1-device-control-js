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
}
