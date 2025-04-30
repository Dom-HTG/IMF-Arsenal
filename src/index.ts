import express, { Request, Response, NextFunction, Application } from "express";
import dotenv from "dotenv";
dotenv.config();
import cors from "cors";

const app: Application = express();

// Application level middlewares.
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(cors(corsConfig));

// Healthcheck.
app.get("/healthcheck", (_req: Request, res: Response) => {
    res.status(200).json({ message: "IMF Server is running..." });
});

// Retrieves a list of gadgets.
app.get("/gadgets", (req: Request, res: Response) => {

});

// Adds a new gadget to the inventory.
app.post("/gadgets", (req: Request, res: Response) => {

});

// Updates an existing gadgets' information.
app.put("/gadgets/:id", (req: Request, res: Response) => {

});

// Removes gadget from the inventory.
// Marks the status of the gadget as decommissioned and adds a timestamp.
app.delete("/gadgets/:id", (req: Request, res: Response) => {

});

// Self destruct.
// Requires a randomly generated confirmation code.
app.post("/gadget/:id/self-destruct", (req: Request, res: Response) => {

});




const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}...`);
});
