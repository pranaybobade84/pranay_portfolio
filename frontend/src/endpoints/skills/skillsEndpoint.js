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
      query: () => ({
        url: "/skills",
        method: "GET",
      }),
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
  }),
});

export const {
  useAddSkillMutation,
  useGetAllSkillsQuery,
  useDeleteSkillMutation,
} = skillApi;
