import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_KEY = "4adb1c473346a6d181476c1dc87182ee";

export const getInvoiceData = createAsyncThunk(
  "auth/getInvoiceData",
  async (credentials: string, thunkAPI: any) => {
    console.log(credentials);

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

      console.log(response.data.data[0]);

      return response.data.data[0];
    } catch (e: any) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const clearDataInvoices = createAsyncThunk(
  "auth/clearDataInvoices",
  async (credentials, _: any) => {
    return;
  }
);
