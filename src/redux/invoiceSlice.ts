import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-hot-toast";
import {
  getInvoiceData,
  clearDataInvoices,
  getOfficeListByCity,
} from "./operations";
import { Office, InvoiceState, InvoiceData } from "../interfaces/interfaces";

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
        let newInvoiceData: InvoiceData = {
          status: "ТТН не знайдено",
          sending: "",
          receiving: "",
        };

        if (payload.Status !== undefined) {
          newInvoiceData = {
            status: payload.Status,
            sending: payload.WarehouseSender,
            receiving: payload.WarehouseRecipient,
          };
        }

        if (!state.userDataInvoices.includes(payload.Number)) {
          state.userDataInvoices.unshift(payload.Number);
        }
        state.invoiceData = newInvoiceData;
        state.isLoading = false;
      })
      .addCase(getInvoiceData.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(clearDataInvoices.fulfilled, (state) => {
        state.userDataInvoices = [];
      })
      .addCase(getOfficeListByCity.pending, (state) => {
        state.isLoading = true;
        state.officeList = [];
      })
      .addCase(getOfficeListByCity.fulfilled, (state, { payload }) => {
        if (payload.data.length === 0) {
          toast.error(
            "В нас не вийшло знайти відділення нової пошти у ваному місті.",
            {
              style: {
                width: "300px",
                borderRadius: "10px",
                fontSize: "20px",
              },
            }
          );
        }

        const newList = payload.data.map(({ Description, SiteKey }: Office) => {
          return { Description, SiteKey };
        });

        state.officeList = newList;
        state.isLoading = false;
      })
      .addCase(getOfficeListByCity.rejected, (state) => {
        state.isLoading = false;
      });
  },
});
getOfficeListByCity;
export const invoiceReducer = invoiceSlice.reducer;
