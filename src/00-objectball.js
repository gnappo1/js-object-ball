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
// ! HELPERS SECTION --------------
const gameObj = gameObject()
const players = {...gameObj.home.players, ...gameObj.away.players}

const playerStatsObj = (playerName) => {
    return players[playerName]
}

// ------------------------------------
// numPointsScored
const numPointsScored = playersName => {
    // if (gameObj['home']['players'][playersName]) {
    //     return gameObj['home']['players'][playersName]['points']
    // } else if (gameObj['away']['players'][playersName]) {
    //     return gameObj['away']['players'][playersName]['points']
    // } else {
    //     return "No players exist by that name!"
    // }

    // for (let team in gameObj) { //home
    //     const teamPlayersObj = gameObj[team].players // Brooklyn Nets Players
    //     if (teamPlayersObj.hasOwnProperty(playersName)) { //if the player is in the home team
    //         return teamPlayersObj[playersName].points
    //     }
    // }
    return playerStatsObj(playersName) ? playerStatsObj(playersName).points : "No players exist by that name!"
}

// shoeSize
const shoeSize = playerName => {
    for (let team in gameObj) {
        const teamPlayersObj = gameObj[team].players
        const player = teamPlayersObj[playerName]
        if (player) {
            return player.shoe
        }
    }
    return "No players exist by that name!"
}


// winningTeam

const winningTeam = () => {
    // const homeTeamPoints = gameObj.home.players
    // const awayTeamPoints = gameObj.away.players
    let homePoints = 0
    let awayPoints = 0

    for (let team in gameObj) {
        const {players} = gameObj[team]
        const teamPlayersStatsArray = Object.values(players)

        for (let stat of teamPlayersStatsArray) {
            if (team === 'home') {
                homePoints += stat.points
            } else {
                awayPoints += stat.points
            }
        }
    }
    
    return homePoints > awayPoints ? gameObj.home.teamName : gameObj.away.teamName
}