import apiSlice from "../api/apiSlice";

const accountsApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAccounts: builder.query({
      query: () => "accounts.json",
    }),
    getAccount: builder.query({
      query: () => "accounts.json",
    }),
    addAccount: builder.mutation({
      query: (body) => ({
        url: "accounts.json",
        method: "PUT",
        body: body,
      }),
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const res = await queryFulfilled;
          dispatch(
            apiSlice.util.updateQueryData("getAccounts", undefined, () => {
              return arg;
            })
          );
        } catch (err) {
          console.log(err);
        }
      },
    }),
  }),
});

export const {
  useGetAccountsQuery,
  useGetAccountQuery,
  useAddAccountMutation,
} = accountsApi;
