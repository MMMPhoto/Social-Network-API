import mongoose from "mongoose";
const { Schema, model } = mongoose;
import reactionSchema from "./Reaction.js";

const thoughtSchema = new Schema(
    {
        thoughtText: {type: String, required: true, maxLength: 280},
        createdAt: {type: Date, default: Date.now, 
            // get: (date) => timeSince(date)
        },
        username: {type: String, required: true},
        reactions: [reactionSchema]
    },
    {
        timestamps: true,
        toJSON: {
            getters: true,
            virtuals: true
        }
    }
);

thoughtSchema
    .virtual('reactionCount')
    .get(function() {
        return this.reactions.length;
    });
    
const Thought = model('thought', thoughtSchema);

export default Thought;