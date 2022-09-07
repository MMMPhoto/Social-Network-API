import pkg from "mongoose";
const { connect, connection } = pkg;

connect('mongodb://127.0.0.1:27017/socialnetworkdb', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

export default connection;

