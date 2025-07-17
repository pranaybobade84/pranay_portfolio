import { apiSlice } from "../apiSlice";

export const skillApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    addSkill: builder.mutation({
      query: (data) => ({
        url: "/skills",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Skills"],
    }),
    getAllSkills: builder.query({
      query: () => "/skills",
      transformResponse: (res) => res?.skills,
      providesTags: ["Skills"],
    }),
    deleteSkill: builder.mutation({
      query: (id) => ({
        url: `/skills/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Skills"],
    }),
    updateSkill: builder.mutation({
      query: ({ id, ...data }) => ({
        url: `/skills/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["Skills"],
    }),
  }),
});

export const {
  useAddSkillMutation,
  useGetAllSkillsQuery,
  useDeleteSkillMutation,
  useUpdateSkillMutation,
} = skillApi;
