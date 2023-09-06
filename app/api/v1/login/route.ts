import { createPool } from "mariadb";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

// This code using default xampp config that may not the same as other
// please change with your own configuration

const pool = createPool({
    host: "localhost",
    user: "root",
    password: "",
    port: 3306,
    database: "todo_app_db"
})


// POST is used as login check
export async function POST(request: NextRequest){
    const request_body = await request.text()
    // TODO: handle request when request body not json
    const request_json = JSON.parse(request_body) || {}

    let response = new NextResponse(null);

    // Database related code
    let conn;
    try {
        conn = await pool.getConnection()
        // TODO: hash password
        let result = await conn.query(`
            SELECT id, username FROM user_cred
            WHERE username = ? AND password = ?
        `, [
            request_json['username'],
            request_json['password']
        ])
        // set userId cookie
        cookies().set('userId', (result[0].id || -1).toString())
        
        response = new NextResponse(JSON.stringify(result[0]))
        await conn.end()
    }
    catch (err){
        console.error(err)
        response = new NextResponse(null, {
            status: 403
        })
    }
    return response
}

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
    return NextResponse.json("ok")
}