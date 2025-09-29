const bold = "\x1b[1m";
const reset = "\x1b[0m";

const colors = {
  log: "\x1b[36m",
  warn: "\x1b[33m",
  note: "\x1b[35m",    
  error: "\x1b[31m",    
  success: "\x1b[32m",
  timestamp: "\x1b[90m",
};

const symbols = {
  log: " ",     
  warn: " ",     
  note: " ",     
  error: " ",    
  success: " ",  
};

function pad(n) {
  return n.toString().padStart(2, "0");
}

function timestamp() {
  const d = new Date();
  return `${pad(d.getHours())}:${pad(d.getMinutes())}:${pad(d.getSeconds())}`;
}

function format(type, message) {
  const timeStr = `${colors.timestamp}${timestamp()}${reset}`;
  const typeStr = `${colors[type] || colors.log}${bold}${symbols[type] || ''} ${type.toUpperCase()}${reset}`;
  return `${timeStr} ${typeStr} ${message}`;
}

const kleurr = {};

["log", "warn", "note", "error", "success"].forEach((type) => {
  kleurr[type] = (msg) => {
    let method = console.log;
    if (type === "warn") method = console.warn;
    else if (type === "note") method = console.info;
    else if (type === "error") method = console.error;
    method(format(type, msg));
  };
});

kleurr.registerType = (type, color = "\x1b[37m", symbol = "") => {
  colors[type] = color;
  symbols[type] = symbol;
  kleurr[type] = (msg) => console.log(format(type, msg));
};

module.exports = kleurr;
