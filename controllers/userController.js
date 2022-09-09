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