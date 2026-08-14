import express from "express";
import { details, search } from "../controllers/trainController.js";

const router = express.Router();

router.get("/search", search);
router.get("/:trainNumber", details);

export default router;