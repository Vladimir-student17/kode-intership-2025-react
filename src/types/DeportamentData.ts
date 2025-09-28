import { z } from "zod";

export const DeportametmSchema = z.union([
  z.literal("android"),
  z.literal("ios"),
  z.literal("design"),
  z.literal("management"),
  z.literal("qa"),
  z.literal("back_office"),
  z.literal("frontend"),
  z.literal("hr"),
  z.literal("pr"),
  z.literal("backend"),
  z.literal("support"),
  z.literal("analytics"),
]);

export type Deportament = z.infer<typeof DeportametmSchema>;
