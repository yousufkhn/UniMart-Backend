import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import {connectDB} from "./config/db";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

//middleware
app.use(cors());
app.use(express.json());

//mongodb connection
connectDB();

app.get("/", (_req, res) => {
  res.send("Server running with TypeScript!");
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

export default app;