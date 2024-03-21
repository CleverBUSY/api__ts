import { NextResponse } from "next/server";

export async function GET(req: Request) {
    return NextResponse.json([
         {
            id: 1,
            name: "burger cheez"
         },
         {
            id: 2,
            name: "doner"
         },
         {
            id: 3,
            name: "big doner"
         },
         {
            id: 4,
            name: "big burger"
         }
        
        ])
}