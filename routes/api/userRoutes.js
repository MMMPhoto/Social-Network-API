import express from "express";
const router = express.Router();
import {
    getAllUsers,
    getOneUser,
    createOneUser,
    updateOneUser,
    removeOneUser,
    addFriend,
    removeFriend
} from '../../controllers/userController.js';

// /api/users Routes
router.route('/').get(getAllUsers).post(createOneUser);

// /api/users/:userId Routes
router.route('/:userId').get(getOneUser).put(updateOneUser).delete(removeOneUser);

// /api/users/:userId/friends/:friendId Routes
router.route('/:userId/friends/:friendId').post(addFriend).delete(removeFriend);

export default router;