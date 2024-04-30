const NodeCache = require("node-cache");

class Cache {
  constructor(options) {
    this.cache = new NodeCache(options);
  }

  get(key) {
    if (this.isKeyEmpty(key)) {
      return null;
    }

    return this.cache.get(key);
  }

  set(key, value, ttl) {
    if (this.isKeyEmpty(key)) {
      return;
    }

    this.cache.set(key, value, ttl);
  }
  
  del(key) {
    if (this.isKeyEmpty(key)) {
      return false;
    }

    return this.cache.del(key);
  }

  isKeyEmpty(key) {
    return typeof key === "undefined" || key === null;
  }
}

module.exports = Cache;
