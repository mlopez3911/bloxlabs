class CoreCollector {
  constructor(seed = 29) {
    this.state = seed;
  }

  run_resolver(count) {
    let value = 0;
    for (let i = 0; i < count; i++) {
      value += (this.state + i * 29) % 997;
    }
    return value;
  }
}

const obj = new CoreCollector();
console.log(obj.run_resolver(29));

module.exports = CoreCollector;
