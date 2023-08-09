export interface Office {
  Description: string;
  SiteKey: string;
}

export interface InvoiceState {
  invoiceData: {
    status: string;
    sending: string;
    receiving: string;
  };
  userDataInvoices: string[];
  isLoading: boolean;
  officeList: Office[];
}

export interface InvoiceData {
  status: string;
  sending: string;
  receiving: string;
}
