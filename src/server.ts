// Contains concrete implementation of the application server.
import { Application } from "express";
import { AppDataSource } from "./store/datasource";

// Initializes typeorm data sources.
export const InitializeDataSource = () => {
    AppDataSource.initialize()
        .then(() => {
            console.log("Data Source has been initialized!");
        })
        .catch((err) => {
            console.error("Error during Data Source initialization", err);
        });
};

export const RegisterRoutes = (app: Application) => {
    // Healthcheck.
    app.get("/healthcheck", (_req, res) => {
        res.status(200).json({ message: "IMF Server is running..." });
    });
};