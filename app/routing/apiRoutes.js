var friendsArr = require("../data/friends.js");


module.exports = function(app) {

    app.get("/api/friends", function(req, res) {
        res.json(friendsArr)
 
    })

    app.post("/api/friends", function(req, res) {
        friendsArr.push(req.body);
        res.json()

        // logic for comparing newFriend to friends


       for (var i = 0; i < (friendsArr.length - 1); i++) {

       console.log(friendsArr[i].scores)

       }

       


})
}