import { User, Thought } from '../models/index.js';

const getAllUsers = async (req, res) => {
    try {
        const allUsers = await User.find();
        console.log(allUsers);
        res.status(200).json(allUsers);    
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
};

const getOneUser = async (req, res) => {
    try {
        const oneUser = await User.findOne({ _id: req.params.userId });
        console.log(oneUser);
        !oneUser ? res.status(404).json({ message: 'No user with that ID' }) : res.status(200).json(oneUser);    
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }

};

const createOneUser = async (req, res) => {
    try {
        const newUser = await User.create(req.body);
        console.log(newUser);
        res.status(200).json(newUser);    
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }

};

const updateOneUser = async (req, res) => {

};

const removeOneUser = async (req, res) => {

};

const addFriend = async (req, res) => {

};

const removeFriend = async (req, res) => {

};

export {getAllUsers, getOneUser, createOneUser, updateOneUser, removeOneUser, addFriend, removeFriend};