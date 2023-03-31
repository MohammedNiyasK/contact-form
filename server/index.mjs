import express from "express";
import { connectToDatabase } from "./src/services/database.services.mjs";
import contactRouter from './src/routes/user.routes.mjs'
import cors from "cors";

const app = express()
app.use(express.json());

const port = 3000;

connectToDatabase()
  .then(() => {
    app.use(cors());
    app.use("/contact", contactRouter);

    app.listen(port, () => {
      console.log(`Server started at http://localhost:${port}`);
    });
  })
  .catch((error) => {
    console.error("Database connection failed", error);
    process.exit();
  });
