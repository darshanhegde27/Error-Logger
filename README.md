# Error-Logger

**Error-Logger** is a simple Node.js package designed to capture and log both **caught** and **uncaught** errors globally, storing them in a file with timestamps for easier debugging and monitoring.

## Features
1. **Global Error Handling**: Automatically catches and logs uncaught exceptions and unhandled promise rejections.
2. **Error Logging to File**: Logs error messages and stack traces to a local text file.
3. **Customizable Metadata**: Allows you to log additional metadata with each error.
4. **Timestamped Logs**: Includes timestamps in error logs to track when each error occurred.
5. **Easy Integration**: Simple to set up and use in any Node.js application.

## Installation

To install the package, run:

```bash
npm install dli/error-logger
