import { getTileById } from "@/data/tiles";
import { NextResponse } from "next/server";

export function GET(_request, { params }) {
  const tile = getTileById(params.id);

  if (!tile) {
    return NextResponse.json({ message: "Tile not found" }, { status: 404 });
  }

  return NextResponse.json(tile);
}
