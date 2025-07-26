import { apiSlice } from "../apiSlice";

export const projectApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    addProject: builder.mutation({
      query: (body) => ({
        url: "/projects",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Project"],
    }),

    getAllProjects: builder.query({
      query: () => "/projects",
      providesTags: ["Project"],
    }),

    getProjectDetail: builder.query({
      query: (id) => `/projects/${id}`,
      providesTags: ["Project"],
    }),

    editProject: builder.mutation({
      query: ({ id, ...body }) => ({
        url: `/projects/${id}`,
        method: "PATCH",
        body,
      }),
      invalidatesTags: ["Project"],
    }),

    deleteProject: builder.mutation({
      query: (id) => ({
        url: `/projects/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Project"],
    }),
  }),
});

export const {
  useAddProjectMutation,
  useGetAllProjectsQuery,
  useGetProjectDetailQuery,
  useEditProjectMutation,
  useDeleteProjectMutation,
} = projectApi;
