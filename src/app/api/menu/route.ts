import { type NextRequest } from "next/server";
import { prisma } from "@/lib/db";

export async function GET(request: NextRequest) {
  try {
    const category = request.nextUrl.searchParams.get("category");

    const menuItems = await prisma.menuItem.findMany({
      where: category ? { category } : undefined,
      orderBy: { createdAt: "desc" },
    });

    return Response.json(
      { success: true, data: { menuItems } },
      { status: 200 }
    );
  } catch (error) {
    console.error("Fetch menu items error:", error);
    return Response.json(
      { success: false, error: "Internal server error" },
      { status: 500 }
    );
  }
}
