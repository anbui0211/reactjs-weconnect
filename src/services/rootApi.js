import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const rootApi = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_BASE_URL_V1,
  }),
  // Nơi định cấp các endpoint cho API
  endpoints: (builder) => {
    return {
      // builder.mutation là những api có method là post, put, delete
      // builder.query là những api có method là get
      register: builder.mutation({
        query: ({ full_name, email, password }) => {
          return {
            url: '/register',
            method: 'POST',
            body: { full_name, email, password },
          };
        },
      }),
      login: builder.mutation({
        query: ({ email, password }) => {
          return {
            url: '/login',
            method: 'POST',
            body: { email, password },
          };
        },
      }),
      verifyOTP: builder.mutation({
        query: ({ email, otp }) => {
          return {
            url: '/verify-otp',
            method: 'POST',
            body: { email, otp },
          };
        },
      }),
    };
  },
});

// useRegisterMutation : là tên hook được sinh ra từ: use (custom hook) +  register (ndpoint) + builder.mutation
export const { useRegisterMutation, useLoginMutation, useVerifyOTPMutation } =
  rootApi;
