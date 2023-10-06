import { NextRequest, NextResponse } from "next/server";

import { pool } from "../db_config/db_config";
import { cookies } from "next/headers";

export async function GET(request: NextRequest){
    if (!cookies().has('userId')){
        return
    }
    const {searchParams} = new URL(request.url)
    const userId = cookies().get('userId')?.value
    // Reject the request when userId is not the same as the cookie
    if (userId !== searchParams.get('user_id')){
        return
    }
    
    // DB coonection
    const userData = await pool.query(`
        SELECT username FROM user_cred WHERE id = ?
    `, [userId])
    return (
        new NextResponse(JSON.stringify({
            "data": userData?.[0]
        }))
    )

}

// PUT is used to adding new user
export async function PUT(request: NextRequest){
    const request_body = await request.text()
    // TODO: handle request when request body not json
    const request_json = JSON.parse(request_body)

    let response = new NextResponse(null);

    // Database related code
    try {
        let result = await pool.query(`
            INSERT INTO user_cred (username, password)
            VALUES (?, ?)
        `, [
            request_json['username'],
            request_json['password']
        ])
        response = new NextResponse(JSON.stringify(result[0]))
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
    try {
        await pool.query(`
            DELETE FROM user_cred WHERE username=?
        `, [
            response_json['username']
        ])
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