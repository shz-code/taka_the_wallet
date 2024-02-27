import apiSlice from "../api/apiSlice";

const transactionsApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getTransactions: builder.query({
      query: () => "transactions.json",
    }),
    addTransaction: builder.mutation({
      query: (body) => ({
        url: "transactions.json",
        method: "PUT",
        body: body,
      }),
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const res = await queryFulfilled;
          dispatch(
            apiSlice.util.updateQueryData("getTransactions", undefined, () => {
              return res.data;
            })
          );
        } catch (err) {
          console.log(err);
        }
      },
    }),
  }),
});

export const { useGetTransactionsQuery, useAddTransactionMutation } =
  transactionsApi;
