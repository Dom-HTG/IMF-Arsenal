import express, { Request, Response, NextFunction, Application } from "express";
import dotenv from "dotenv";
dotenv.config();
import cors from "cors";

const app: Application = express();

// Application level middlewares.
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(cors(corsConfig));

app.get("/healthcheck", (req: Request, res: Response) => {
    res.status(200).json({ message: "IMF Server is running..." });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}...`);
});
