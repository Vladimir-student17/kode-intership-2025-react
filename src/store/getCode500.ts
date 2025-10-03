import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const getCode500 = createApi({
  reducerPath: "getCode500",
  tagTypes: ["Code500"],
  baseQuery: fetchBaseQuery({
    baseUrl:
      "https://stoplight.io/mocks/kode-frontend-team/koder-stoplight/86566464/",
  }),
  endpoints: (build) => ({
    getCode500: build.query<string, void>({
      query: () => `/users?__code=500&__dynamic=true`,
      transformResponse: (response: string,): string => {
        return response;
      },
    }),
  }),
});

export const { useGetCode500Query } = getCode500;
