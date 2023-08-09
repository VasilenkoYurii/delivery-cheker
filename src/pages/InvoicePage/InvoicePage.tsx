import React, { useState } from "react";

import { ThunkDispatch } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { RotatingLines } from "react-loader-spinner";
import { getInvoiceData, clearDataInvoices } from "../../redux/operations";
import {
  selectInvoiceData,
  selectIsLoading,
  selectUserDataInvoisec,
} from "../../redux/selectors";
import {
  Container,
  InfoBox,
  PageTitle,
  Form,
  Label,
  Input,
  SubmitButton,
  DescriptionContainer,
  InvoiceHistoryContainer,
  InvoiceButton,
  SpanBold,
} from "./InvoicePage.styled";

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
        <PageTitle>Отримати статус посилки за номером ТТН</PageTitle>
        <Form onSubmit={hendleSubmit}>
          <Label>
            <Input
              type="text"
              pattern="[0-9]{14}"
              placeholder="Номер ТТН"
              maxLength={14}
              required
              value={invoice}
              onChange={(e) => setInvoice(e.target.value)}
            />
          </Label>
          <SubmitButton type="submit">ВІДПРАВИТИ</SubmitButton>
        </Form>

        <InfoBox>
          <DescriptionContainer>
            {isLoading ? (
              <RotatingLines
                strokeColor="#fa4a3b"
                strokeWidth="5"
                animationDuration="0.75"
                width="96"
                visible={true}
              />
            ) : invoiseData.status === "" ? (
              <h3>Тут буде інформація стосовно вашої посилки</h3>
            ) : (
              <ul>
                <li>
                  <SpanBold>Статус доставки:</SpanBold> {invoiseData.status}
                </li>
                <li>
                  {" "}
                  <SpanBold>Відправлено:</SpanBold> {invoiseData.sending}
                </li>
                <li>
                  {" "}
                  <SpanBold>Отримано:</SpanBold> {invoiseData.receiving}
                </li>
              </ul>
            )}
          </DescriptionContainer>
        </InfoBox>
      </div>
      <InvoiceHistoryContainer>
        <h3>Історія переглядів</h3>
        <InvoiceButton onClick={hendleClearDataInvoices}>
          Видалити историю
        </InvoiceButton>
        {userDataInvoisec.length !== 0 && (
          <ul>
            {userDataInvoisec.map((number, index) => {
              return (
                <li key={index}>
                  <InvoiceButton onClick={() => hendleClick(number)}>
                    {number}
                  </InvoiceButton>
                </li>
              );
            })}
          </ul>
        )}
      </InvoiceHistoryContainer>
    </Container>
  );
};

//   const trackingNumber = "20450754717929";

// Number: "20450754717929";
