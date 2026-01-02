import { Router } from "express";
import {
  createPollution,
  getAllPollutions,
  getPollutionById,
  updatePollution,
  deletePollution,
} from "../controllers/pollution.controller";
import { requireAuth } from "../auth/requireAuth";

const router = Router();

// CREATE - POST /api/pollutions
router.post("/", requireAuth, createPollution);

// READ - GET /api/pollutions
router.get("/", requireAuth, getAllPollutions);

// READ - GET /api/pollutions/:id
router.get("/:id", requireAuth, getPollutionById);

// UPDATE - PUT /api/pollutions/:id
router.put("/:id", requireAuth, updatePollution);

// DELETE - DELETE /api/pollutions/:id
router.delete("/:id", requireAuth, deletePollution);

export default router;
