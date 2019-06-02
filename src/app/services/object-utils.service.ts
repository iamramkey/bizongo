export class ObjectUtils {
  /**
   *  Get a value deep inside an object or array
   *
   * @param {object | array} object or array to get the values inside
   * @param {path} location of key to read from the object
   * @returns {string|number}
   *
   */
  public static deepFind(obj: object, path: string): any {
    if (obj instanceof Object) {
      if (typeof path === 'string') {
        if (path.length > 0) {
          const paths = path.split('.');
          let current = obj;
          let i;

          for (i = 0; i < paths.length; ++i) {
            if (current[paths[i]] === undefined) {
              return undefined;
            } else {
              current = current[paths[i]];
            }
          }
          return current;
        }
      }
    }
    return null;
  }

  /**
   *  Set a value deep inside an object or array
   *
   * @param {object | array} object or array to get the values inside
   * @param {any} any datatype which is used to set for given key
   * @param {path} location of key to set a value
   *
   */
  public static setToValue(obj, value, path) {
    path = path.split('.');
    for (var i = 0; i < path.length - 1; i++) {
      obj = obj[path[i]];
    }
    obj[path[i]] = value;
  }

  public static copy(value) {
    return JSON.parse(JSON.stringify(value));
  }
}
