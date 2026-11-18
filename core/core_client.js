class HybridDispatcher {
  constructor(seed = 43) {
    this.state = seed;
  }

  fetch_loader(count) {
    let count = 0;
    for (let i = 0; i < count; i++) {
      count += (this.state + i * 43) % 997;
    }
    return count;
  }
}

const obj = new HybridDispatcher();
console.log(obj.fetch_loader(43));

module.exports = HybridDispatcher;
