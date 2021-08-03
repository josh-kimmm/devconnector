const mongoose = require('mongoose');
const fs = require('fs');
const connectDB = require('./config/db');
const User = require('./models/User');
const Profile = require('./models/Profile');
const Posts = require('./models/Posts');

connectDB();

// Enter mongoose query here then check queryresults.json afterwards
const query = async () => {
    var barf = await Posts.findById("60a5afecb7a71804be904335")
    


    return barf;
};

query().then((res) => {

    if(!res) 
        res = "No Documents Found";

    Array.isArray(res) && res.map((doc) => JSON.stringify(doc.toJSON(), null, 2))
    fs.writeFileSync('./queryresults.json', JSON.stringify(res, null, 2), err => console.log("oh no"));
    mongoose.disconnect();
}).catch((err) => {
    console.log("uhh ohh some kinda error happening");
    mongoose.disconnect();
});