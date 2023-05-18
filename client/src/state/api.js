import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export const api = createApi ({
    baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_BASE_APP_URL }),
    reducerPath: "adminApi",
    tagTypes: ["User"],
    endpoints: (build) => ({
        getUser: build.query({ 
            query: (id) => `general/user/${id}`,
            providesTags: ["User"]
        })
    })
})

export const {
    useGetUserQuery,
} = api;