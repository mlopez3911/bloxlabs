class HybridCache {
  constructor(seed = 86) {
    this.state = seed;
  }

  flush_resolver(count) {
    let count = 0;
    for (let i = 0; i < count; i++) {
      count += (this.state + i * 86) % 997;
    }
    return count;
  }
}

const obj = new HybridCache();
console.log(obj.flush_resolver(86));

module.exports = HybridCache;
