// errorLogger.js
const fs = require('fs');
const path = require('path');

class ErrorLogger {
  constructor() {
    this.logFilePath = path.join(process.cwd(), 'error_logs.txt');
    console.log("tester")
  }

 
  logToFile(error, level = 'error', metadata = {}) {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] [${level}] - ${error.message}\nStack Trace: ${error.stack || 'No stack trace'}\nMetadata: ${JSON.stringify(metadata)}\n\n`;

    
    fs.appendFile(this.logFilePath, logMessage, (err) => {
      if (err) {
        console.error('Failed to write to log file:', err);
      }
    });
  }

  handleError(error, level = 'error', metadata = {}) {
    this.logToFile(error, level, metadata);
  }
}

module.exports = {ErrorLogger};
