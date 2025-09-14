import { z } from "zod";

export const exampleSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters long"),
});

export const signUpSchema = z.object({
  name: z.string().min(6, "Name must be at least 2 characters long"),
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters long"),
});

export const signInSchema = signUpSchema.omit({ name: true });

export const mutateCourseSchema = z.object({
  name: z.string().min(5, "Title must be at least 2 characters long"),
  categoryId: z.string().min(1, "Category is required"),
  tagline: z.string().min(10, "Tagline must be at least 10 characters long"),
  description: z.string().min(2, "Description must be at least 20 characters long"),
});