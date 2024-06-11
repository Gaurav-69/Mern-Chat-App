const mongoose = require("mongoose");

const connectDB = async () =>{
    const URL = `mongodb+srv://user200:test234@cluster0.aw7mgep.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
    try {
        await mongoose.connect(URL, {
            useNewUrlParser : true,
            useUnifiedTopology: true,

        });

        console.log("Database connected successfully");
    } catch (error) {
        console.log("Error while connecting the database", error);
    }
};

module.exports = connectDB;