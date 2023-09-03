import { PoolConnection, createPool } from "mariadb";
import { NextRequest, NextResponse } from "next/server";

const pool = createPool({
    host: "localhost",
    user: "root",
    password: "",
    port: 3306,
    database: "todo_app_db"
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