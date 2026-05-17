import express from "express";
import getUsers from "./api-routes/getUser.js";
const app = express();
app.use(express.json());

const PORT = 5300;
app.use("/api", getUsers);

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

export default app;
