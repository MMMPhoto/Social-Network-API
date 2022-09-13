import { Thought, User } from '../models/index.js';

const getAllThoughts = async (req, res) => {
    try {
        const allThoughts = await Thought.find();
        res.status(200).json(allThoughts);    
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    };
};

const createNewThought = async (req, res) => {
    try {
        const newThought = await Thought.create(req.body);
        const thoughtUser = await User.findOneAndUpdate(
            { _id: req.body.userId },
            { $addToSet: { thoughts: newThought._id } },
            { new: true }
        );
        !thoughtUser ? res.status(404).json({ message: 'Thought added, but no User found with that ID' }) : res.status(200).json(newThought);   
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    };
};

const getOneThought = async (req, res) => {
    try {
        const oneThought = await Thought.findOne({ _id: req.params.thoughtId })
            .populate('username');
        console.log(oneThought);
        !oneThought ? res.status(404).json({ message: 'No user with that ID' }) : res.status(200).json(oneThought);    
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    };
};

const updateOneThought = async (req, res) => {
    try {
        const updateThought = await Thought.findOneAndUpdate(
            { _id: req.params.thoughtId },
            { $set: req.body },
            { runValidators: true, new: true }
        );
        !updateThought ? res.status(404).json({ message: 'No thought with that ID' }) :res.status(200).json(updateThought);    
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    };
};

const removeOneThought = async (req, res) => {
    try {
        const deleteThought = await Thought.findOneAndRemove({ _id: req.params.thoughtId });
        !deleteThought 
            ? res.status(404).json({ message: 'No thought with that ID' })
            : await User.findOneAndRemove({ _id: deleteThought._id });
        res.status(200).json({ message: 'Thought deleted!'});    
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    };
};

const createReaction = async (req, res) => {
    try {
        const newReaction = await Thought.findOneAndUpdate(
            { _id: req.params.thoughtId },
            { $addToSet: { reactions: req.body }},
            { new: true }
        );
        !newReaction ? res.status(404).json({ message: 'No thought with that ID' }) : res.status(200).json(newReaction);   
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    };
};

const removeReaction = async (req, res) => {
    try {
        const deleteReaction = await Thought.findOneAndUpdate(
            { _id: req.params.thoughtId },
            { $pull: { reactions: { reactionId: req.body.reactionId } } },
            { new: true }
        );
        console.log(deleteReaction);
        !deleteReaction
            ? res.status(404).json({ message: 'No thought with that ID' })
            : res.status(200).json({ message: 'Reaction deleted!'});    
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    };

};

export {getAllThoughts, createNewThought, getOneThought, updateOneThought, removeOneThought, createReaction, removeReaction};