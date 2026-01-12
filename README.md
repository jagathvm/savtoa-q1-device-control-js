# Device Control System (JavaScript)

This project demonstrates a simple **Device Control System** implemented using **Object-Oriented Programming (OOP)** principles in JavaScript.

It is designed to showcase core OOP concepts such as **abstraction, encapsulation, inheritance, and polymorphism** using modern **ES Modules**.

---

## 📁 Project Structure

```text
savtoa-q1-device-control-js/
│
├── src/
│ ├── Device.js # Abstract-style base class
│ ├── Fan.js # Concrete device implementation
│ ├── Controller.js # Controller to operate devices
│ └── index.js # Application entry point
│
├── package.json
└── README.md
```

---

## 🧠 Design Overview

### 1️⃣ Device (Base Class)

- Acts like an **abstract class**
- Maintains a **private power state**
- Forces subclasses to implement `start()` and `stop()`

**Key concepts:**

- Encapsulation using private fields
- Abstraction via enforced method contracts

---

### 2️⃣ Fan (Concrete Device)

- Extends the `Device` base class
- Implements `start()` and `stop()` behavior
- Uses protected helper methods for state changes

---

### 3️⃣ Controller

- Operates any device **polymorphically**
- Does not depend on concrete implementations
- Demonstrates **runtime polymorphism**

---
