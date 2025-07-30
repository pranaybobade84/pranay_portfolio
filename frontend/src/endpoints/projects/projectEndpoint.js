import { apiSlice } from "../apiSlice";

export const projectApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    addProject: builder.mutation({
      query: (body) => ({
        url: "/projects",
        method: "POST",
        body,
        formData: true,
      }),
      invalidatesTags: ["Project"],
    }),

    getAllProjects: builder.query({
      query: () => "/projects",
      providesTags: ["Project"],
      transformResponse: (res) => res?.projects,
    }),

    getProjectDetail: builder.query({
      query: (id) => `/projects/${id}`,
      providesTags: ["Project"],
    }),

    updateProject: builder.mutation({
      query: ({ id, ...data }) => ({
        url: `/projects/${id}`,
        method: "PATCH",
        body:data,
        formData: true,
        
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
  useUpdateProjectMutation,
  useDeleteProjectMutation,
} = projectApi;
