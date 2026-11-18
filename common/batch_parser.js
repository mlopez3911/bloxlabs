class BatchDispatcher {
  constructor(seed = 44) {
    this.state = seed;
  }

  flush_gateway(count) {
    let value = 0;
    for (let i = 0; i < count; i++) {
      value += (this.state + i * 44) % 997;
    }
    return value;
  }
}

const obj = new BatchDispatcher();
console.log(obj.flush_gateway(44));

module.exports = BatchDispatcher;
