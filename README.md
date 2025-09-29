<h1 align="center">
  Kleurr
</h1>

<h4 align="center" id="about">
 A lightweight console logging prettifier for Node.js, designed with simplicity and readability in mind.</h4>

<div align="center">
  <img alt="Header" src="screenshots/header.png" width="88%">
</div>

<p align="center">
  <a href="https://www.npmjs.com/package/@averagecryptonerd/kleurr">
  </a>
</p>


## Contents

- [About](#about)
- [Install](#install)
- [Usage](#usage)

## Install

### Through NPM:

```bash
npm install @averagecryptonerd/kleurr
```

## Usage

### Default Loggers

Import Kleurr and start using any of the default loggers.

<details>
<summary>Available loggers:</summary>

<br/>

- `log`
- `warn`
- `note`
- `error`
- `success`
- `loading`
- `important`
- `fatal`
- `debug`

</details>

<br/>

### Basic Logging
```javascript
const kleurr = require("@averagecryptonerd/kleurr");

kleurr.log("This is a standard log message.");
kleurr.info?.("This is an informational message.");
kleurr.warn("This is a warning!");
kleurr.note("Here's a helpful note.");
kleurr.error("Something went wrong!");
kleurr.success("Operation completed successfully!");
kleurr.fatal("This is a fatal error!");
kleurr.debug("Debugging: variable x = 42");
kleurr.important("This is important!");
kleurr.loading("Processing data…");
```

### Custom Logging
```javascript
kleurr.registerType("custom", "\x1b[35m", "★ "); // Purple star
kleurr.custom("This is a custom log type!");
```
> You can create as many custom types as you like by specifying the background and text colors using ANSI escape codes.
