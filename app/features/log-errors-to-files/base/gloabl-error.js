// globalErrorHandler.js
const errorLogger = require('./error-logger');

class GlobalErrorHandler {
  constructor() {
   
    this.setupGlobalErrorHandlers();
  }

  setupGlobalErrorHandlers() {
    // Global handler for unhandled promise rejections
    process.on('unhandledRejection', (reason, promise) => {
     
      errorLogger.handleError(reason, 'error', { promise });
    });

    // Global handler for uncaught exceptions
    process.on('uncaughtException', (error) => {
     
      errorLogger.handleError(error, 'error', {});
     
      process.exit(1); 
    });
  }
}

module.exports = GlobalErrorHandler;
