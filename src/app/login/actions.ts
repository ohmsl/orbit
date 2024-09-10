"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { createClient } from "@/utils/supabase/server";

export async function login({
  email,
  password,
}: {
  email: string;
  password: string;
}) {
  const supabase = createClient();

  if (!email || !password) {
    redirect("/error");
  }

  const data = {
    email,
    password,
  };

  const { error } = await supabase.auth.signInWithPassword(data);

  if (error) {
    redirect("/error");
  }

  revalidatePath("/", "layout");
  redirect("/");
}

export async function signup({
  email,
  password,
  metadata,
}: {
  email: string;
  password: string;
  metadata: {
    name: {
      firstname: string;
      lastname: string;
    };
  };
}) {
  const supabase = createClient();

  if (!email || !password) {
    redirect("/error");
  }

  const { error } = await supabase.auth.signUp({
    email,
    password,
    options: { data: { metadata } },
  });

  if (error) {
    redirect("/error");
  }

  revalidatePath("/", "layout");
  redirect("/");
}

export const signInWithGoogle = async () => {
  const supabase = createClient();

  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: "google",
    options: { redirectTo: "http://localhost:3000/auth/callback" },
  });

  if (error) redirect("/error");

  if (data) redirect(data.url);

  revalidatePath("/", "layout");
  redirect("/");
};

export const signInWithGithub = async () => {
  const supabase = createClient();

  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: "github",
    options: { redirectTo: "http://localhost:3000/auth/callback" },
  });

  if (error) redirect("/error");

  if (data) redirect(data.url);

  revalidatePath("/", "layout");
  redirect("/");
};
