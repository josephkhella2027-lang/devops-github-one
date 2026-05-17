import express from "express";
import getUsers from "./api-routes/getUser.js";
import dotenv from "dotenv";

dotenv.config();
const app = express();
app.use(express.json());
app.use("/api", getUsers);

const PORT = process.env.PORT || 5300;

// ONLY start server outside tests
if (process.env.NODE_ENV !== "test") {
  app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
  });
}

export default app;
