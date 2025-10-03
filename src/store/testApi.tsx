import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const testApi = createApi({
  reducerPath: "testApi",
  tagTypes: ["Test"],
  baseQuery: fetchBaseQuery({
    baseUrl:
      "https://stoplight.io/mocks/kode-frontend-team/koder-stoplight/86566464/",
  }),
  endpoints: (build) => ({
    getTest: build.query<any, string>({
      query: (set) => `users?__dynamic=${set}`,
      transformResponse: (response: any) => {
        return response;
      },
    }),
  }),
});

export const { useGetTestQuery } = testApi;
