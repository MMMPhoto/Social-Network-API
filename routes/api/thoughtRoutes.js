import express from "express";
const router = express.Router();
import {
    getAllThoughts,
    createNewThought,
    getOneThought,
    updateOneThought,
    removeOneThought,
    createReaction,
    removeReaction
} from '../../controllers/thoughtController.js';

// /api/thoughts Routes
router.route('/').get(getAllThoughts).post(createNewThought);

// /api/thoughts/:thoughtId Routes
router.route('/:thoughtId').get(getOneThought).put(updateOneThought).delete(removeOneThought);

// /api/thoughts/:thoughtId/reactions Routes
router.route('/:thoughtId/reactions').post(createReaction).delete(removeReaction);

export default router;