import "reflect-metadata";
import { DataSource, DataSourceOptions } from "typeorm";
import { SeederOptions } from "typeorm-extension";
import * as process from "node:process";
const port = process.env.DB_PORT as unknown as number | undefined;

const options: DataSourceOptions & SeederOptions = {
    type: "postgres",
    host: '172.20.10.4',
    port: port,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    synchronize: true,
    logging: false,
    entities:  ["src/entity/**/*.ts"],
    migrations: [],
    subscribers: [],
};

export const AppDataSource = new DataSource(options);
