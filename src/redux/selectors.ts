interface InvoiceData {
  status: string;
  sending: string;
  receiving: string;
}

export const selectInvoiceData = (state: {
  invoice: { invoiceData: InvoiceData };
}) => state.invoice.invoiceData;

export const selectUserDataInvoisec = (state: {
  invoice: { userDataInvoices: string[] };
}) => state.invoice.userDataInvoices;

export const selectIsLoading = (state: { invoice: { isLoading: boolean } }) =>
  state.invoice.isLoading;
