const pictureStack = [
];

const captionStack = [
];

class Game {
    constructor(){
        this.picture = "";
        this.players = {};
        this.playedCaptions = [
            { text: "I don't always..." }
        ];
    }
}

class Player{
    constructor(name){
        this.name = name;
        this.captions = [];
        this.score = 0;
    }
}

//module.exports.Player = Player;
module.exports = {
    Player, Game
}