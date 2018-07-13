var friendsArr = require("../data/friends.js");

console.log(friendsArr);


module.exports = function (app) {

    app.get("/api/friends", function (req, res) {
        res.json(friendsArr)

    })

    app.post("/api/friends", function (req, res) {

        // console.log(req.body);

        let newFriend = {
            name: req.body.name,
            photo: req.body.photo,
            scores: req.body.scores
        }


        newFriend.scores = newFriend.scores.map(score => {
            return parseInt(score);
        });

        console.log(newFriend);


    let testArray = [1, 2, 3, 4, 5]

    function reducer(accumulator, currentValue){
        return accumulator + currentValue;
    }

        // friendsArr.push(req.body);
        // res.json()

        // logic for comparing newFriend to friends

        let totalMatches = [];
        for (let i = 0; i < friendsArr.length; i++) {

            let matchScore = [];

            //    console.log(friendsArr[i].scores)
            for (let y = 0; y < friendsArr[i].scores.length; y++) {
                matchScore.push(Math.abs(newFriend.scores[y] - friendsArr[i].scores[y]));
            }

            totalMatches.push(matchScore);

        }

        console.log(totalMatches);



let chosenFriendArray = [];

    for(let i = 0; i < totalMatches.length; i++){
        chosenFriendArray.push(totalMatches[i].reduce(reducer))
    }


    let matchedFriendIndex = Math.min.apply(null, chosenFriendArray);
    console.log("this is our matchedFriendIndex ", matchedFriendIndex);


    let friendsArrIndex = chosenFriendArray.indexOf(matchedFriendIndex);
    console.log("this is our friendsArray index: ", friendsArrIndex);

    let matchedFriend = friendsArr[friendsArrIndex];

    console.log("this is our matched friend ", matchedFriend);

    friendsArr.push(newFriend);

    res.json(matchedFriend);



    })
}