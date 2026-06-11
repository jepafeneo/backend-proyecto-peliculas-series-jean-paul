import { Router } from "express";

import { register } from "../controllers/auth.controller.js";

const router = Router();

// Prefijo: /api/auth

router.post("/register", register);

export default router;
