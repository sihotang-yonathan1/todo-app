import { createPool } from "mariadb";
import { NextRequest, NextResponse } from "next/server";
import * as dotenv from 'dotenv'
// This code using default xampp config that may not the same as other
// please change with your own configuration
dotenv.config()

const pool = createPool({
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT || "3306"),
    database: process.env.DB_NAME
})
// PUT is used to adding new user
export async function PUT(request: NextRequest){
    const request_body = await request.text()
    // TODO: handle request when request body not json
    const request_json = JSON.parse(request_body)

    let response = new NextResponse(null);

    // Database related code
    let conn;
    try {
        conn = await pool.getConnection()
        let result = await conn.query(`
            INSERT INTO user_cred (username, password)
            VALUES (?, ?)
        `, [
            request_json['username'],
            request_json['password']
        ])
        response = new NextResponse(JSON.stringify(result[0]))
        conn.end()
    }
    catch (err){
        console.error(err)
        response = new NextResponse(null, {
            status: 403
        })
    }
    return response
}

export async function DELETE(request: NextRequest){
    let response_text = await request.text()

    let response_json = JSON.parse(response_text)
    let conn;
    try {
        conn = await pool.getConnection()
        await conn.query(`
            DELETE FROM user_cred WHERE username=?
        `, [
            response_json['username']
        ])
        conn.end()
        return NextResponse.json("ok")
        
    }
    catch (err){
        console.error(err)
        return new NextResponse(JSON.stringify({
            'message': 'Operation cancelled, error occured'
        }), {
            status: 403
        })
    }
}