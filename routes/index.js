import express from "express";
const router = express.Router();
import apiRoutes from "./api/index.js";

router.use('/api', apiRoutes);

router.use((req, res) => {
    return res.send('Route not found!');
});

export default router;

