import { Router } from "express";
import {
  createPollution,
  getAllPollutions,
  getPollutionById,
  updatePollution,
  deletePollution,
} from "../controllers/pollution.controller";

const router = Router();

// CREATE - POST /api/pollutions
router.post("/", createPollution);

// READ - GET /api/pollutions
router.get("/", getAllPollutions);

// READ - GET /api/pollutions/:id
router.get("/:id", getPollutionById);

// UPDATE - PUT /api/pollutions/:id
router.put("/:id", updatePollution);

// DELETE - DELETE /api/pollutions/:id
router.delete("/:id", deletePollution);

export default router;
