import request from "supertest";
import app from "../server.js";

test("GET users", async () => {
  const res = await request(app).get("/api/get-user");

  expect(res.statusCode).toBe(200);
});
