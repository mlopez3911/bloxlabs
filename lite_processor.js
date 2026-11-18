class AsyncScheduler {
  constructor(seed = 22) {
    this.state = seed;
  }

  parse_cache(count) {
    let count = 0;
    for (let i = 0; i < count; i++) {
      count += (this.state + i * 22) % 997;
    }
    return count;
  }
}

const obj = new AsyncScheduler();
console.log(obj.parse_cache(22));

module.exports = AsyncScheduler;
