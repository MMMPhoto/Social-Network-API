import { User, Thought } from '../models/index.js';

const getAllUsers = async (req, res) => {
    try {
        const allUsers = await User.find()
        .populate({ path: 'thoughts', options: {strictPopulate: false}})
        .populate({ path: 'friends', options: {strictPopulate: false}});
        res.status(200).json(allUsers);    
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    };
};

const getOneUser = async (req, res) => {
    try {
        const oneUser = await User.findOne({ _id: req.params.userId })
            .populate({ path: 'thoughts', options: {strictPopulate: false}})
            .populate({ path: 'friends', options: {strictPopulate: false}})
        !oneUser ? res.status(404).json({ message: 'No user with that ID' }) : res.status(200).json(oneUser);    
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    };
};

const createOneUser = async (req, res) => {
    try {
        const newUser = await User.create(req.body);
        res.status(200).json(newUser);    
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    };
};

const updateOneUser = async (req, res) => {
    try {
        const updateUser = await User.findOneAndUpdate(
            { _id: req.params.userId },
            { $set: req.body },
            { runValidators: true, new: true }
        );
        !updateUser ? res.status(404).json({ message: 'No user with that ID' }) : res.status(200).json(updateUser);    
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    };
};

const removeOneUser = async (req, res) => {
    try {
        const deleteUser = await User.findOneAndRemove({ _id: req.params.userId });
        !deleteUser 
            ? res.status(404).json({ message: 'No user with that ID' })
            : await Thought.deleteMany({ _id: { $in: deleteUser.thoughts}});
        res.status(200).json({ message: 'User and associated thoughts deleted!'});    
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    };
};

const addFriend = async (req, res) => {
    try {
        const addFriend = await User.findOneAndUpdate(
            { _id: req.params.userId },
            { $addToSet: { friends: req.params.friendId }},
            { runValidators: true, new: true }           
        );
        console.log(addFriend);
        !addFriend ? res.status(404).json({ message: 'No user with that ID' }) : res.status(200).json(addFriend);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    };
};

const removeFriend = async (req, res) => {
    try {
        const deleteFriend = await User.findOneAndUpdate(
            { _id: req.params.userId },
            { $pull: { friends: req.params.friendId } },
            { runValidators: true, new: true }
        );
        console.log(deleteFriend);
        !deleteFriend ? res.status(404).json({ message: 'No user with that ID' }) : res.status(200).json({ message: 'Friend deleted!'});    
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    };
};

export {getAllUsers, getOneUser, createOneUser, updateOneUser, removeOneUser, addFriend, removeFriend};