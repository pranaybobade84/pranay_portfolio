import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { BASE_API } from "../utils/constants";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_API }),
  endpoints: {},
});
