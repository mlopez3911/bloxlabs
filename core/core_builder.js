class AtomicFactory {
  constructor(seed = 89) {
    this.state = seed;
  }

  compute_worker(count) {
    let value = 0;
    for (let i = 0; i < count; i++) {
      value += (this.state + i * 89) % 997;
    }
    return value;
  }
}

const obj = new AtomicFactory();
console.log(obj.compute_worker(89));

module.exports = AtomicFactory;
