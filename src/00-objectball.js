function gameObject() {
    return {
        home: {
            teamName: "Brooklyn Nets",
            colors: ["Black", "White"],
            players: {
                "Alan Anderson": {
                    number: 0,
                    shoe: 16,
                    points: 22,
                    rebounds: 12,
                    assits: 12,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 1,
                },
                "Reggie Evens": {
                    number: 30,
                    shoe: 14,
                    points: 12,
                    rebounds: 12,
                    assits: 12,
                    steals: 12,
                    blocks: 12,
                    slamDunks: 7,
                },
                "Brook Lopez": {
                    number: 11,
                    shoe: 17,
                    points: 17,
                    rebounds: 19,
                    assits: 10,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 15,
                },
                "Mason Plumlee": {
                    number: 1,
                    shoe: 19,
                    points: 26,
                    rebounds: 12,
                    assits: 6,
                    steals: 3,
                    blocks: 8,
                    slamDunks: 5,
                },
                "Jason Terry": {
                    number: 31,
                    shoe: 15,
                    points: 19,
                    rebounds: 2,
                    assits: 2,
                    steals: 4,
                    blocks: 11,
                    slamDunks: 1,
                },
            },
        },
        away: {
            teamName: "Charlotte Hornets",
            colors: ["Turquoise", "Purple"],
            players: {
                "Jeff Adrien": {
                    number: 4,
                    shoe: 18,
                    points: 10,
                    rebounds: 1,
                    assits: 1,
                    steals: 2,
                    blocks: 7,
                    slamDunks: 2,
                },
                "Bismack Biyombo": {
                    number: 0,
                    shoe: 16,
                    points: 12,
                    rebounds: 4,
                    assits: 7,
                    steals: 7,
                    blocks: 15,
                    slamDunks: 10,
                },
                "DeSagna Diop": {
                    number: 2,
                    shoe: 14,
                    points: 24,
                    rebounds: 12,
                    assits: 12,
                    steals: 4,
                    blocks: 5,
                    slamDunks: 5,
                },
                "Ben Gordon": {
                    number: 8,
                    shoe: 15,
                    points: 33,
                    rebounds: 3,
                    assits: 2,
                    steals: 1,
                    blocks: 1,
                    slamDunks: 0,
                },
                "Brendan Hayword": {
                    number: 33,
                    shoe: 15,
                    points: 6,
                    rebounds: 12,
                    assits: 12,
                    steals: 22,
                    blocks: 5,
                    slamDunks: 12,
                },
            },
        },
    };
}
//! Helpers
const findPlayerByName = (playerName) => {
    for (let key in gameObject()) { //! used to loop through the keys in an object
        //! use [] notation to access values inside an object when dealing with variable keys or non-camelCase keys
        //! otherwise use the . notation
        const maybePlayerData = gameObject()[key].players[playerName]
        if (maybePlayerData) {
            return maybePlayerData
        }
    }
    return false
}

//! Exercise Functions
// Build a function, numPointsScored that takes in an argument of a player's name and returns the number of points scored for that player.
function numPointsScored(playerName) {
    const maybePlayer = findPlayerByName(playerName)
    if (maybePlayer) {
        return maybePlayer.points
    }
    return "The player is not among any of our rosters"
}
// console.log(numPointsScored("Bismack Biyombo"))

// Think about where in the object you will find a player's points. How can you iterate down into that level? Think about the return value of your function.
// Build a function, shoeSize, that takes in an argument of a player's name and returns the shoe size for that player.
function shoeSize(playerName) {
    const maybePlayer = findPlayerByName(playerName)
    return maybePlayer ? maybePlayer.shoe : "The player is not among any of our rosters"
}
// console.log(shoeSize("Bismack Biyombo"))
// Think about how you will find the shoe size of the correct player.How can you check and see if a player's name matches the name that has been passed into the function as an argument?
// Build a function, teamColors, that takes in an argument of the team name and returns an array of that teams colors.
// Build a function, teamNames, that operates on the game object to return an array of the team names.
// Build a function, playerNumbers, that takes in an argument of a team name and returns an array of the jersey numbers for that team.
const playerNumbers = (teamName) => {
    for (let key in gameObject()) { //! used to loop through the keys in an object
        if (gameObject()[key]["teamName"] === teamName) {
            //! figure out a way to create an array with all the jersey numbers
            return Object.values(gameObject()[key]["players"]).map(statObj => statObj.number)
        }
    }
    return "The team is not in our records"
}

console.log(playerNumbers("Charlotte Hornets"))