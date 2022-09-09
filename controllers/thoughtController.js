import { Thought, Reaction } from '../models/index.js';

const getAllThoughts = async (req, res) => {
    try {
        const allThoughts = await Thought.find();
        console.log(allThoughts);
        res.status(200).json(allThoughts);    
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    };
};

const createNewThought = async (req, res) => {
    try {
        const newThought = await Thought.create(req.body);
        res.status(200).json(newThought);    
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

};

const removeOneThought = async (req, res) => {

};

const createReaction = async (req, res) => {

};

const removeReaction = async (req, res) => {

};

export {getAllThoughts, createNewThought, getOneThought, updateOneThought, removeOneThought, createReaction, removeReaction};