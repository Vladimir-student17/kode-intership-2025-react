import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const testApi = createApi({
  reducerPath: "usetestApirApi",
  tagTypes: ["Test"],
  baseQuery: fetchBaseQuery({
    baseUrl:
      "https://stoplight.io/mocks/kode-frontend-team/koder-stoplight/86566464/",
  }),
  endpoints: (build) => ({
    getTest: build.query<number, void>({
      query: () => `users?__dynamic=true`,
      transformResponse: (_response: any, meta): number => {
        return meta?.response?.status || 0;
      },
    }),
  }),
});

export const { useGetTestQuery } = testApi;
