import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try {
        const body = await req.json();

        const n8nRes = await fetch(
            "https://n8n.yespstudio.com/webhook/5efac579-1d3b-4376-86bf-24ad0effbf26",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(body),
            }
        );

        const text = await n8nRes.text();

        if (!n8nRes.ok) {
            console.error("n8n error:", text);
            return NextResponse.json(
                { error: "n8n failed", details: text },
                { status: 500 }
            );
        }

        return NextResponse.json({ success: true });
    } catch (err: any) {
        console.error("API crash:", err);
        return NextResponse.json(
            { error: "Server crash", details: err.message },
            { status: 500 }
        );
    }
}
