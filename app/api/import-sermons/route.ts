import { NextResponse } from "next/server";

export async function GET() {
  try {
    return NextResponse.json({
      ok: true,
      message: "Import endpoint ready"
    });
  } catch {
    return NextResponse.json(
      {
        ok: false,
        error: "Import failed"
      },
      { status: 500 }
    );
  }
}