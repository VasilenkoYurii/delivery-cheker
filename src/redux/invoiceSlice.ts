import { createSlice } from "@reduxjs/toolkit";
// import { toast } from "react-hot-toast";
import { getInvoiceData, clearDataInvoices } from "./operations";

interface InvoiceState {
  invoiceData: {
    status: string;
    sending: string;
    receiving: string;
  };
  userDataInvoices: string[]; // явное указание типа массива
  isLoading: boolean;
}

const initialState: InvoiceState = {
  invoiceData: {
    status: "",
    sending: "",
    receiving: "",
  },
  userDataInvoices: [],
  isLoading: false,
};

const invoiceSlice = createSlice({
  name: "invoice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getInvoiceData.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getInvoiceData.fulfilled, (state, { payload }) => {
        const newInvoiceData = {
          status: payload.Status,
          sending: payload.WarehouseSender,
          receiving: payload.WarehouseRecipient,
        };
        if (!state.userDataInvoices.includes(payload.Number)) {
          state.userDataInvoices.unshift(payload.Number);
        }
        state.invoiceData = newInvoiceData;
        state.isLoading = false;
      })
      .addCase(getInvoiceData.rejected, (state) => {
        state.isLoading = false;
        // toast.error("Something went wrong, please try again.", {
        //   style: {
        //     width: "300px",
        //     height: "40px",
        //     borderRadius: "10px",
        //     fontSize: "20px",
        //   },
        // });
      })
      .addCase(clearDataInvoices.fulfilled, (state) => {
        state.userDataInvoices = [];
      });
  },
});

export const invoiceReducer = invoiceSlice.reducer;
