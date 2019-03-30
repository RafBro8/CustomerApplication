// Logging in:
// browser console
// email
// database

export interface ILogger {}

export class BaseLogger implements ILogger {
  Log() {
    console.log('BaseLogger');
  }
}

export class ConsoleLogger extends BaseLogger {
    Log() {
      console.log('Using console logger');
    }
}

export class DbLogger extends BaseLogger {
    Log() {
      console.log('Using DbLogger logger');
    }
}

// adding this new FileLogger will require changes in multiple places which is bad design
export class FileLogger extends BaseLogger {
  Log() {
    console.log('Using FileLogger logger');
  }
}
