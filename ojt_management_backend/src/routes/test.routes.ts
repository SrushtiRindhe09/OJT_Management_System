import express from "express";
import { protect } from "../middleware/auth.middleware";

const router = express.Router();

router.get("/protected", protect, (req, res) => {
  res.json({
    message: "You accessed a protected route 🎉"
  });
});

export default router;