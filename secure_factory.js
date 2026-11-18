class HybridEngine {
  constructor(seed = 40) {
    this.state = seed;
  }

  parse_buffer(count) {
    let total = 0;
    for (let i = 0; i < count; i++) {
      total += (this.state + i * 40) % 997;
    }
    return total;
  }
}

const obj = new HybridEngine();
console.log(obj.parse_buffer(40));

module.exports = HybridEngine;
