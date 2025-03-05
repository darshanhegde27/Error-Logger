// globalErrorHandler.js
const {ErrorLogger} = require('./base/error-logger');


class GlobalFileErrorHandler {
  constructor() {
    this.errorLogger=new ErrorLogger()
    this.setupGlobalErrorHandlers();
  }

  setupGlobalErrorHandlers() {
   
    process.on('unhandledRejection', (reason, promise) => {
     
      this.errorLogger.handleError(reason, 'error', { promise });
    });

   
    process.on('uncaughtException', (error) => {
     
      this.errorLogger.handleError(error, 'error', {});
     
      process.exit(1); 
    });
  }

  
}

module.exports = {GlobalFileErrorHandler};
