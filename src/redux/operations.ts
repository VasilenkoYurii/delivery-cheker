import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_KEY = "4adb1c473346a6d181476c1dc87182ee";

export const getInvoiceData = createAsyncThunk(
  "auth/getInvoiceData",
  async (credentials: string, thunkAPI: any) => {
    const getStatusData = {
      apiKey: API_KEY,
      modelName: "TrackingDocument",
      calledMethod: "getStatusDocuments",
      methodProperties: {
        Documents: [
          {
            DocumentNumber: credentials,
            Phone: "",
          },
        ],
      },
    };

    try {
      const response = await axios.post(
        "https://api.novaposhta.ua/v2.0/json/",
        getStatusData
      );

      if (response.data.success === false) {
        return {
          Status: "ТТН не знайдено",
          WarehouseSender: "",
          WarehouseRecipient: "",
          Number: credentials,
        };
      }

      return response.data.data[0];
    } catch (e: any) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const clearDataInvoices = createAsyncThunk(
  "auth/clearDataInvoices",
  async (__, _: any) => {
    return;
  }
);

export const getOfficeListByCity = createAsyncThunk(
  "auth/getOfficeListByCity",
  async (credentials: string, thunkAPI: any) => {
    const requestData = {
      apiKey: API_KEY,
      modelName: "Address",
      calledMethod: "getWarehouses",
      methodProperties: {
        Language: "uk",
        CityName: `${credentials}`,
      },
    };

    try {
      const response = await axios.post(
        "https://api.novaposhta.ua/v2.0/json/",
        requestData
      );

      return response.data;
    } catch (e: any) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
