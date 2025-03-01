import { z } from "zod";

// Zod schema for validation
export const validationSchema = z.object({
  fullName: z.string().min(3, "Full name must be at least 3 characters long"),
  email: z.string().email("Please enter a valid email address"),
  phoneNumber: z
    .string()
    .min(10, "Phone number must be at least 10 digits long")
    .max(15, "Phone number must be at most 15 digits long"),
  degree: z.string().min(2, "Degree field is required"),
  university: z.string().min(2, "University name is required"),
  yearOfPassing: z
    .string()
    .regex(/^\d{4}$/, "Year of passing must be a valid year (e.g. 2020)"),
  skills: z.string().min(3, "Skills field is required"),
  resume: z
    .any()
    .refine((value) => value && value.size > 0, "Please upload your resume"),
});
