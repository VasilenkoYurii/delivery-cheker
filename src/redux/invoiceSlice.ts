import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-hot-toast";
import {
  getInvoiceData,
  clearDataInvoices,
  getOfficeListByCity,
} from "./operations";
import { Office, InvoiceState } from "../interfaces/interfaces";

const initialState: InvoiceState = {
  invoiceData: {
    status: "",
    sending: "",
    receiving: "",
  },
  userDataInvoices: [],
  officeList: [],
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
      })
      .addCase(getOfficeListByCity.fulfilled, (state, { payload }) => {
        const newList = payload.data.map(({ Description, SiteKey }: Office) => {
          return { Description, SiteKey };
        });

        state.officeList = newList;

        toast.success(
          `У вашому місті поштоматів та відділень Нової пошти знайдено: ${payload.data.length}!`,
          {
            style: {
              width: "300px",
              borderRadius: "10px",
              fontSize: "20px",
            },
          }
        );
      })
      .addCase(getOfficeListByCity.rejected, (state) => {});
  },
});
getOfficeListByCity;
export const invoiceReducer = invoiceSlice.reducer;
