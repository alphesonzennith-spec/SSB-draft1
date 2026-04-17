import { NextResponse } from "next/server";
import servicesData from "@/data/services.json";

export async function GET() {
  return NextResponse.json(servicesData);
}
