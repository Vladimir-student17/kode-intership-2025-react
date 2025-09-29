import type { DepartamentData } from "@/types/DepartamentData";
import type { GetDataItems } from "@/types/GetDataItems";
import type { User } from "@/types/UserData";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userApi = createApi({
  reducerPath: "userApi",
  tagTypes: ["Users"],
  baseQuery: fetchBaseQuery({
    baseUrl:
      "https://stoplight.io/mocks/kode-frontend-team/koder-stoplight/86566464/",
  }),
  endpoints: (build) => ({
    getUsers: build.query<User[], DepartamentData>({
      query: (department) => `users?__example=${department}`,
      transformResponse: (response: GetDataItems): User[] => {
        return response.items;
      },
      providesTags: (result) => {
        if (Array.isArray(result)) {
          return [
            ...result.map((item) => ({ type: "Users" as const, id: item.id })),
            { type: "Users", id: "LIST" },
          ];
        }
        return [{ type: "Users", id: "LIST" }];
      },
    }),
  }),
});

export const { useGetUsersQuery, useLazyGetUsersQuery } = userApi;
