import { InvoiceData, Office } from "../interfaces/interfaces";

export const selectInvoiceData = (state: {
  invoice: { invoiceData: InvoiceData };
}) => state.invoice.invoiceData;

export const selectUserDataInvoisec = (state: {
  invoice: { userDataInvoices: string[] };
}) => state.invoice.userDataInvoices;

export const selectIsLoading = (state: { invoice: { isLoading: boolean } }) =>
  state.invoice.isLoading;

export const selectOfficeList = (state: {
  invoice: { officeList: Office[] };
}) => state.invoice.officeList;
