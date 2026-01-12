// ----- Controller Class -----
class Controller {
  // method to operate a device
  operate(device) {
    // call the start method to turn ON the device
    device.start();
    // call the stop method to turn OFF the device
    device.stop();
  }
}

// Export Controller Class
export default Controller;
