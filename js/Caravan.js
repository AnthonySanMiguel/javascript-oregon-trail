/* eslint-disable object-curly-newline */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
// Caravan.js

class Caravan {
  constructor(stats) {
    this.init(stats);
  }

  init({
    day, users, devs, soylent, servers, money, bounties,
  }) {
    this.day = day;
    this.users = users;
    this.devs = devs;
    this.soylent = soylent;
    this.servers = servers;
    this.money = money;
    this.bounties = bounties;
  }

  updateUsers() {
    // the closer to capacity, the slower
    const speed = OregonH.SLOW_SPEED + this.devs / OregonH.FULL_SPEED;
    this.users += speed;
  }

  consumeSoylent() {
    this.soylent -= this.devs * OregonH.SOYLENT_PER_PERSON;

    if (this.soylent < 0) {
      this.soylent = 0;
    }
  }
}
