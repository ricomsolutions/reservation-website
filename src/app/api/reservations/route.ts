import { NextRequest } from "next/server";
import { prisma } from "@/lib/db";
import { getCurrentUser } from "@/lib/auth";
import { reservationSchema } from "@/lib/validations";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const parsed = reservationSchema.safeParse(body);
    if (!parsed.success) {
      return Response.json(
        { success: false, error: parsed.error.errors[0].message },
        { status: 400 }
      );
    }

    const { fullName, email, phone, partySize, date, time, message } =
      parsed.data;

    // Optionally link to authenticated user
    const authPayload = await getCurrentUser(request);

    const reservation = await prisma.reservation.create({
      data: {
        fullName,
        email,
        phone,
        partySize,
        date: new Date(date),
        time,
        message: message || null,
        userId: authPayload?.userId || null,
      },
    });

    return Response.json(
      { success: true, data: { reservation } },
      { status: 201 }
    );
  } catch (error) {
    console.error("Create reservation error:", error);
    return Response.json(
      { success: false, error: "Internal server error" },
      { status: 500 }
    );
  }
}
