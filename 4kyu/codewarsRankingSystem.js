// Codewars ranking system
const _highestRank = new WeakMap();

class User {
  constructor() {
    this.rank = -8;
    this.progress = 0;
    _highestRank.set(this, 8);
  }

  incProgress(rank) {
    const highestRank = _highestRank.get(this);

    if (rank > highestRank || rank < -highestRank)
      throw new Error("Invalid rank");

    let difference = Math.abs(this.rank - rank);

    if (rank > 0 && this.rank < 0) difference--;
    if (rank < 0 && this.rank > 0) difference = -difference;

    if (difference > 0)
      this.progress +=
        this.rank === -1 && rank === 1 ? 10 : 10 * Math.pow(difference, 2);
    else this.progress += this.rank === rank ? 3 : 1;

    if (this.progress > 100 && this.rank < 8) {
      this.rank += Math.floor(this.progress / 100);

      if (this.rank === 0) this.rank++;
      this.progress %= 100;
    }
    if (this.rank === highestRank) this.progress = 0;
  }
}

const user = new User();

user.incProgress(1);

console.log(user);
