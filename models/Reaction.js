import mongoose from "mongoose";
const { Schema, model } = mongoose;

const reactionSchema = new Schema(
    {
        reactionId: {type: Schema.Types.ObjectId, default: () => new Types.ObjectId()},
        reactionBody: {type: String, required: true, maxLength: 280},
        username: {type: String, required: true},
        createdAt: {type: Date, default: Date.now, get: (date) => timeSince(date)}
    },
    {
        timestamps: true,
        toJSON: {
            getters: true,
            virtuals: true
        }
    }
);

reactionSchema
    .virtual('friendCount')
    .get(function() {
        return this.friends.length;
    })
    .set(function(v) {
        this.set(v);
    });
    
const Reaction = model('user', reactionSchema);

export default Reaction;