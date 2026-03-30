"use server";

import { redirect } from "next/navigation";

export async function loginAction(formData: FormData): Promise<void> {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  // CHECK HERE
  console.log("LOGGIN IN");
  

  redirect("/");
}
