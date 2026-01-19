const mongoose = require("mongoose");
const dburl = 'mongodb+srv://sudheer:sudheer@realestate.z4iheyk.mongodb.net/?appName=RealEstate';

mongoose.connect(dburl)
    .then(() => {
        console.log('Database Connected')
    })
    .catch((err) => {
        console.log(err)
    })