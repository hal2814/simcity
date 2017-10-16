export class Simcity {
  constructor () {
    this.grid = ["lnd","lnd","lnd","lnd","lnd","lnd","lnd","lnd","lnd",
                "lnd","lnd","lnd","lnd","lnd","lnd","lnd","lnd","lnd",
                "lnd","lnd","lnd","lnd","lnd","lnd","lnd","lnd","lnd",
                "lnd","lnd","lnd","lnd","lnd","lnd","lnd","lnd","lnd",
                "lnd","lnd","lnd","lnd","lnd","lnd","lnd","lnd","lnd",
                "lnd","lnd","lnd","lnd","lnd","lnd","lnd","lnd","lnd",
                "lnd","lnd","lnd","lnd","lnd","lnd","lnd","lnd","lnd",
                "lnd","lnd","lnd","lnd","lnd","lnd","lnd","lnd","lnd",
                "lnd","lnd","lnd","lnd","lnd","lnd","lnd","lnd"];
    this.food = 0;
    this.money = 0;
    this.population = 0;
  }
}

export class Building {
  constructor (position,type) {
    this.position = position;
    this.type = type;
  }
}
