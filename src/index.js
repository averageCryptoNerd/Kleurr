const bold = "\x1b[1m";
const reset = "\x1b[0m";

const colors = {
  log: "\x1b[36m",
  warn: "\x1b[33m",
  note: "\x1b[35m",
  error: "\x1b[31m",
  success: "\x1b[32m",
  fatal: "\x1b[30m",
  debug: "\x1b[32m",
  important: "\x1b[33m",
  loading: "\x1b[34m",
  timestamp: "\x1b[90m",
};

const loadingSymbols = ["", "", "", ""];
let spinnerInterval = null;

const symbols = {
  log: " ",
  warn: " ",
  note: " ",
  error: " ",
  success: " ",
  fatal: "󰯈 ",
  debug: " ",
  important: " ",
  loading: loadingSymbols[0]
};

function pad(n) {
  return n.toString().padStart(2, "0");
}

function timestamp() {
  const d = new Date();
  return `${pad(d.getHours())}:${pad(d.getMinutes())}:${pad(d.getSeconds())}`;
}

function format(type, message, symbolIndex = 0) {
  let symbol = symbols[type] || "";
  if (type === "loading") {
    symbol = loadingSymbols[symbolIndex];
  }
  const typeStr = `${colors[type] || colors.log}${bold}${symbol} ${type.toUpperCase()}${reset}`;
  const timeStr = `${colors.timestamp}${timestamp()}${reset}`;
  return `${colors.timestamp}${timeStr}${reset} ${typeStr} ${message}`;
}

const kleurr = {};

["log", "warn", "note", "error", "success", "fatal", "debug", "important"].forEach((type) => {
  kleurr[type] = (msg) => {
    let method = console.log;
    if (type === "warn") method = console.warn;
    else if (type === "note") method = console.info;
    else if (type === "error" || type === "fatal") method = console.error;
    method(format(type, msg));
  };
});

kleurr.loading = (msg) => {
  let i = 0;
  if (spinnerInterval) clearInterval(spinnerInterval);
  spinnerInterval = setInterval(() => {
    process.stdout.write(`\r${format("loading", msg, i)}`);
    i = (i + 1) % loadingSymbols.length;
  }, 200);
};

kleurr.stopLoading = (finalMessage = "Done") => {
  if (spinnerInterval) {
    clearInterval(spinnerInterval);
    spinnerInterval = null;
    process.stdout.write(`\r${format("success", finalMessage)}\n`);
  }
};

kleurr.registerType = (type, color = "\x1b[37m", symbol = "") => {
  colors[type] = color;
  symbols[type] = symbol;
  kleurr[type] = (msg) => console.log(format(type, msg));
};

module.exports = kleurr;
