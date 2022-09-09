import mongoose from "mongoose";
const { connect, connection } = mongoose;

connect('mongodb://127.0.0.1:27017/socialnetworkdb', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

export default connection;

