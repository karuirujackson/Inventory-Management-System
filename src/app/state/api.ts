import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";

export const api = createApi({
    baseQuery: fetchBaseQuery({baseUrl:process.env.NEXT_PUBLIC_API_URL}),
    reducerPath: 'api',
    tagTypes: [],
    endpoints: (_build) => ({}),
});

export const { } = api;