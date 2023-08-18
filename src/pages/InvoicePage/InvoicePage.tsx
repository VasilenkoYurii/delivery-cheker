import React, { useState } from "react";

import { ThunkDispatch } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { getInvoiceData, clearDataInvoices } from "../../redux/operations";
import {
  selectInvoiceData,
  selectIsLoading,
  selectUserDataInvoisec,
} from "../../redux/selectors";
import { GetDataForm } from "../../components/GetInvoiceForm/GetDataForm";
import { InvoiceInfo } from "../../components/InvoiceInfo/InvoiceInfo";
import { InvoiceHistory } from "../../components/InvoiceHistory/InvoiceHistory";
import { Container } from "./InvoicePage.styled";

export const InvoicePage = () => {
  const dispatch = useDispatch<ThunkDispatch<any, any, any>>();
  const invoiseData = useSelector(selectInvoiceData);
  const isLoading = useSelector(selectIsLoading);
  const userDataInvoisec = useSelector(selectUserDataInvoisec);
  const [invoice, setInvoice] = useState("");

  const hendleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    dispatch(getInvoiceData(invoice));
  };

  const hendleClick = (number: string) => {
    setInvoice(number);
    dispatch(getInvoiceData(number));
  };

  const hendleClearDataInvoices = () => {
    dispatch(clearDataInvoices());
  };

  return (
    <Container>
      <div>
        <GetDataForm
          hendleSubmit={hendleSubmit}
          setState={setInvoice}
          value={invoice}
          title={"Отримати статус посилки за номером ТТН"}
          buttonContent={"ВІДПРАВИТИ"}
          placeholder={"Номер ТТН"}
          pattern={"[0-9]{14}"}
        />

        <InvoiceInfo isLoading={isLoading} invoiseData={invoiseData} />
      </div>

      <InvoiceHistory
        hendleClearDataInvoices={hendleClearDataInvoices}
        userDataInvoisec={userDataInvoisec}
        hendleClick={hendleClick}
      />
    </Container>
  );
};
