"use server";

import { prisma } from "@/lib/db";
import { revalidatePath } from "next/cache";

export async function createMessage(formData: FormData) {
  const name = formData.get("name") as string;
  const content = formData.get("content") as string;

  if (!name || name.trim().length < 2) {
    return { error: "Name must be at least 2 characters." };
  }

  if (!content || content.trim().length < 3) {
    return { error: "Message must be at least 3 characters." };
  }

  try {
    await prisma.message.create({
      data: {
        name: name.trim(),
        content: content.trim(),
      },
    });

    revalidatePath("/guestbook");
    return { success: true };
  } catch (error) {
    return { error: "Something went wrong. Please try again." };
  }
}