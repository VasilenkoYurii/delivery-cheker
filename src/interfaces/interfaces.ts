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

export interface GetDataProps {
  hendleSubmit: Function;
  setState: Function;
  value: string;
  title: string;
  buttonContent: string;
  placeholder: string;
  pattern: string;
}

export interface InvoiseInfoProps {
  isLoading: boolean;
  invoiseData: InvoiceData;
}

export interface InvoiceHistoryProps {
  hendleClearDataInvoices: Function;
  userDataInvoisec: string[];
  hendleClick: Function;
}

export interface PaginationProps {
  setCurrentPage: Function;
  currentPage: number;
  lastIndex: number;
  officeList: Office[];
}
