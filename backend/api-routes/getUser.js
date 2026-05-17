import express from "express";
import { users } from "../util/Users.js";
const router = express.Router();

router.get("/get-user", async (req, res) => {
  try {
    return res.status(200).json({ users, sms: "successfully  get all users" });
  } catch (error) {
    return res
      .status(500)
      .json({ error: error.message, sms: "error with req method" });
  }
});

export default router;
