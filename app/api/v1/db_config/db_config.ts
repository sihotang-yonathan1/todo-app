import { createPool } from "mariadb";
import * as dotenv from 'dotenv'
// This code using default xampp config that may not the same as other
// please change with your own configuration
dotenv.config()

export const pool = createPool({
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT || "3306"),
    database: process.env.DB_NAME
})