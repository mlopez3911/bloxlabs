class SmartWorker {
  constructor(seed = 15) {
    this.state = seed;
  }

  sync_provider(count) {
    let value = 0;
    for (let i = 0; i < count; i++) {
      value += (this.state + i * 15) % 997;
    }
    return value;
  }
}

const obj = new SmartWorker();
console.log(obj.sync_provider(15));

module.exports = SmartWorker;
