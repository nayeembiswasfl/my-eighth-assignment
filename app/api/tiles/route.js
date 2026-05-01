import { tiles } from "@/data/tiles";
import { NextResponse } from "next/server";

export function GET() {
  return NextResponse.json(tiles);
}
