import mongoose from "mongoose";
const { Schema, model } = mongoose;
import isEmail from "validator";

const userSchema = new Schema(
    {
        username: {type: String, unique: true, required: true, trim: true},
        email: {type: String, unique: true, required: true, validate: [ isEmail, 'invalid email' ]},
        thoughts: [{type: Schema.Types.ObjectId, ref: 'thought'}],
        friends: [{type: Schema.Types.ObjectId, ref: 'user'}]
    }
);

userSchema
    .virtual('friendCount')
    .get(function() {
        return this.friends.length;
    })
    .set(function(v) {
        this.set(v);
    });
    
const User = model('user', userSchema);

export default User;