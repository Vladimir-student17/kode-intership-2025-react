import { z } from "zod";
import { DeportametmSchema } from "./DeportamentData";

export const UserSchema = z.object({
  id: z.string(),
  avatarUrl: z.string(),
  firstName: z.string(),
  lastName: z.string().min(3).max(6),
  userTag: z.string(),
  department: DeportametmSchema,
  position: z.string(),
  birthday: z.string().refine((val) => !isNaN(Date.parse(val)), {
    message: "Invalid date string",
  }),
  phone: z.string().regex(/^\+7\d{10}$/, {
    message: "Phone must be in format +79001234567",
  }),
});

export type User = z.infer<typeof UserSchema>;

export const UsersListSchema = z.array(UserSchema);

export type UsersList = z.infer<typeof UsersListSchema>;


