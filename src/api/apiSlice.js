import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001" }),
    endpoints: (builder) => ({
        getTasks: builder.query({
            query: () => "/task",
            providesTags: ["Task"],
            transformResponse: (response) => response.sort((a, b) => b.id - a.id)
        }),
        createTask: builder.mutation({
            query: (newTask) => ({
                url: "/task",
                method: "POST",
                body: newTask,
            }),
            invalidatesTags: ["Task"],

        }),
        deleteTask: builder.mutation({
            query: (id) => ({
                url: `/task/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: ["Task"],
        }),
        updateTask: builder.mutation({
            query: (task) => ({
                url: `/task/${task.id}`,
                method: "PUT",
                body: task,
            }),
            invalidatesTags: ["Task"],
        }),
    })
});

export const { useGetTasksQuery, useCreateTaskMutation, useDeleteTaskMutation, useUpdateTaskMutation } = apiSlice