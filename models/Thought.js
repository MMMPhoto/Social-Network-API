import mongoose from "mongoose";
const { Schema, model } = mongoose;

const thoughtSchema = new Schema(
    {
        thoughtText: {type: String, required: true, maxLength: 280},
        createdAt: {type: Date, default: Date.now},
        username: {type: String, required: true},
        reactions: [{type: Schema.Types.ObjectId, ref: 'reaction'}]
    }
);

userSchema
    .virtual('reactionCount')
    .get(function() {
        return this.reactions.length;
    });
    
const Thought = model('thought', thoughtSchema);

export default Thought;