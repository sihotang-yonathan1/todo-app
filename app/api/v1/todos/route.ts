import { PoolConnection, createPool } from "mariadb";
import { NextRequest, NextResponse } from "next/server";
import * as dotenv from 'dotenv'

dotenv.config()

const pool = createPool({
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT || "3306"),
    database: process.env.DB_NAME
})


export async function GET(request: NextRequest){
    let conn: PoolConnection;
    let result: any[] = [];

    try {
        conn = await pool.getConnection()
        let row = await conn.query(`
            SELECT id, name, user_id FROM todo_object
        `) || []
        result = row
    }
    catch (err){
        console.error(err)
    }
    return NextResponse.json(result)
}