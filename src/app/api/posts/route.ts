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
         },
         {
            id: 5,
            name: "vodka"
         },
         {
            id: 6,
            name: "Coca Cola"
         },
         {
            id: 7,
            name: "Fanta"
        },
        {
            id: 8,
            name: "Sprite"
        },
        {
            id: 9,
            name: "shaurma"
        },
        {
            id: 10,
            name: "ramen"
        }
        ])
}