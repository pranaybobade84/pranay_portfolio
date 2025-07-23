import { apiSlice } from "../apiSlice";

export const experienceApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    addExperience: builder.mutation({
      query: (body) => ({
        url: "/experience",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Experience"],
    }),

    getAllExperience: builder.query({
      query: () => "/experience",
      providesTags: ["Experience"],
    }),
    getExperienceDetail: builder.query({
      query: (id) => `/experience/${id}`,
      providesTags: ["Experience"],
    }),

    editExperience: builder.mutation({
      query: ({ id, ...body }) => ({
        url: `/experience/${id}`,
        method: "PATCH",
        body,
      }),
      invalidatesTags: ["Experience"],
    }),

    deleteExperience: builder.mutation({
      query: (id) => ({
        url: `/experience/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Experience"],
    }),
  }),
});

export const {
  useAddExperienceMutation,
  useGetAllExperienceQuery,
  useEditExperienceMutation,
  useDeleteExperienceMutation,
  useGetExperienceDetailQuery,
} = experienceApi;
