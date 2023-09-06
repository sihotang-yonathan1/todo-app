import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest){
    const request_body = await request.text()

    cookies().delete('userId')
    
    return NextResponse.json({
        'message': 'User has been successfully log-out'
    })
}