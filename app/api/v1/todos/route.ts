import { NextRequest, NextResponse } from "next/server";

import { pool } from "../db_config/db_config";

export async function GET(request: NextRequest){
    let result: any[] = [];

    try {
        let row = await pool.query(`
            SELECT id, name, user_id FROM todo_object
        `) || []
        result = row
    }
    catch (err){
        console.error(err)
    }
    return NextResponse.json(result)
}