import { z } from "zod";
import { UsersListSchema } from "./UserData";

export const GetDataItemsSchema = z.object({
  items: UsersListSchema,
});

export type GetDataItems = z.infer<typeof GetDataItemsSchema>;
