import { NextRequest } from "next/server";
import { prisma } from "@/lib/db";
import { getCurrentUser } from "@/lib/auth";

export async function GET(request: NextRequest) {
  try {
    const payload = await getCurrentUser(request);

    if (!payload) {
      return Response.json(
        { success: false, error: "Not authenticated" },
        { status: 401 }
      );
    }

    const user = await prisma.user.findUnique({
      where: { id: payload.userId },
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
        status: true,
        createdAt: true,
        updatedAt: true,
      },
    });

    if (!user) {
      return Response.json(
        { success: false, error: "User not found" },
        { status: 404 }
      );
    }

    if (user.status === "SUSPENDED") {
      return Response.json(
        { success: false, error: "Your account has been suspended" },
        { status: 403 }
      );
    }

    return Response.json(
      { success: true, data: { user } },
      { status: 200 }
    );
  } catch (error) {
    console.error("Get current user error:", error);
    return Response.json(
      { success: false, error: "Internal server error" },
      { status: 500 }
    );
  }
}
