import { DataSource } from "typeorm";
import { Gadget } from "../interfaces/gadget";

// DataSourceOptions.
const dataSourceOptions = {
    host: process.env.DS_HOST as string,
    port: parseInt(process.env.DS_PORT as string),
    username: process.env.DS_USERNAME as string,
    password: process.env.DS_PASSWORD as string,
    database: process.env.DS_DATABASE as string
};

// Initialize new data source.
export const AppDataSource = new DataSource({
    type: "postgres",
    host: dataSourceOptions.host,
    port: dataSourceOptions.port,
    username: dataSourceOptions.username,      
    password: dataSourceOptions.password,   
    database: dataSourceOptions.database,    
    synchronize: true,
    logging: false,
    entities: [Gadget],
    migrations: [],
    subscribers: [],
    poolSize: 3
});