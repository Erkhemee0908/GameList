//Dummy Data
let example = {
    "archery-world-mission-111": {
        "fails": 9,
        "gameId": "archery-world-tour",
        "playTime": 981,
        "wins": 6,
    },
    "bubble-woods-mission-11": {
        "fails": 19,
        "gameId": "bubble-woods",
        "playTime": 1206,
        "wins": 9,
    },
    "bubble-woods-mission-lvl1": {
        "fails": 1,
        "gameId": "bubble-woods",
        "playTime": 100,
        "wins": 2,
    },
    "candy-bubble-mission-lvl1": {
        "fails": 60,
        "gameId": "candy-bubble",
        "playTime": 1558,
        "wins": 60,
    },
    "archery-world-mission-1": {
        "fails": 90,
        "gameId": "archery-world-tour",
        "playTime": 9810,
        "wins": 60,
    },
    "bubble-woods-mission-1": {
        "fails": 190,
        "gameId": "bubble-woods",
        "playTime": 12060,
        "wins": 90,
    },
    "bubble-woods-mission-lvl": {
        "fails": 10,
        "gameId": "bubble-woods",
        "playTime": 1000,
        "wins": 20,
    },
    "candy-bubble-mission-lvl": {
        "fails": 60,
        "gameId": "candy-bubble",
        "playTime": 15580,
        "wins": 60,
    }
}

const reduceByGameId = (obj) => {
    //Accept Object
    //Groups all missions by game and adds up
    //playtime, wins, and fails
    let arr = Object.values(obj);

    return arr.reduce((a, b) => {
        let aa = a.findIndex((e) => e.gameId == b.gameId);
        // returns the index of a 
        // if gameId matches with b
        // returns (-1) if gameId doesn't match 
        if (aa == -1) {
            //if gameId is not matching
            //push a new object to a
            a.push({
                fails: parseInt(b.fails),
                gameId: b.gameId,
                playTime: parseInt(b.playTime),
                wins: parseInt(b.wins)
            });
        }
        else {
            // if gameId matches
            // then add wins, fails, and playtime
            // to existing object
            a[aa].fails += b.fails;
            a[aa].playTime += b.playTime;
            a[aa].wins += b.wins;
        }
        return a
    }, []);
}

console.log(reduceByGameId(example));