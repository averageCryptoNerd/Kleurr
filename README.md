# Kleurr

*Kleurr* (German for "color") is a lightweight console logging prettifier for Node.js, designed with simplicity and readability in mind. Make your logs pop with colors and custom types!
---

## Features

- Predefined log types: `log`, `warn`, `note`, `error`
- Customizable log types with `registerType`
- Works out-of-the-box in Node.js
- Lightweight and dependency-free

---

## Installation

```bash
npm install @averagecryptonerd/kleurr
```

Then require it in your project:
```javascript
const kleurr = require("@averagecryptonerd/kleurr");
```
---

## Usage

### Basic Logging
```javascript
const kleurr = require("@averagecryptonerd/kleurr");

kleurr.log("This is a regular log message.");
kleurr.warn("This is a warning!");
kleurr.note("Here's a helpful note.");
kleurr.error("Something went wrong!");
```

### Custom Log Types
```javascript
kleurr.registerType("success", "\x1b[42m", "\x1b[30m"); // green background, black text
kleurr.success("Operation completed successfully!");
```
> You can create as many custom types as you like by specifying the background and text colors using ANSI escape codes.

---

## Contributing

Contributions, suggestions, and bug reports are welcome! Feel free to open an issue or submit a pull request.