const alllteLog = console
let TSNuxConsole = []
console = {
  "log": function(a) { alllteLog.log(a), TSNuxConsole.push({ "type": "log", "text": a }) },
  "warn": function(a) { alllteLog.warn(a), TSNuxConsole.push({ "type": "warn", "text": a }) },
  "error": function(a) { alllteLog.error(a), TSNuxConsole.push({ "type": "error", "text": a }) }
}
