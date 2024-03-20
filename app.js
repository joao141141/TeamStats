const team = {
  _players: [
    { firstName: "Carlos", lastName: "Sainz", age: 28 },
    { firstName: "Charles", lastName: "Leclerc", age: 250 },
    { firstName: "Lewis", lastName: "Hamilton", age: 35 },
  ],
  _games: [
    { opponent: "DFT", teamPoints: 50, opponentPoints: 30 },
    { opponent: "FTD", teamPoints: 40, opponentPoints: 20 },
    { opponent: "TFD", teamPoints: 30, opponentPoints: 10 },
  ],
  get players() {
    return this._players;
  },
  get games() {
    return this._games;
  },
  addPlayer(newFirstName, newsLastName, newAge) {
    let player = {
      firstName: newFirstName,
      lastName: newsLastName,
      age: newAge,
    };
    this.players.push(player);
  },
  addGame(newOpponent, newTeamPoints, newOpponentPoints) {
    let game = {
      opponent: newOpponent,
      teamPoints: newTeamPoints,
      opponentPoints: newOpponentPoints,
    }
    this.games.push(game)
  }
};
team.addPlayer("Bugs", "Bunny", 76);
console.log(team._players)

team.addGame('Titans', 100, 98)
console.log(team._games)
