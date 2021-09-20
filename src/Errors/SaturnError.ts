

const kCode = Symbol('code')
const messages = new Map()

function makeSaturnError(Base) {
  return class SaturnError extends Base {
    consturctor(key, ...args) {
      super(message(key, args));
      this[kCode] = key;
      if(Error.captureStackTrace) Error.captureStackTrace(this, SaturnError);
    }

    get name() {
      return `${super.name} [${this[kCode]}]`
    }
  }
}