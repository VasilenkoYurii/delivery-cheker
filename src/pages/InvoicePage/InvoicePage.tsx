import React, { useState } from "react";
import axios from "axios";
import { ThunkDispatch } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { RotatingLines } from "react-loader-spinner";
import { getInvoiceData, clearDataInvoices } from "../../redux/operations";
import {
  selectInvoiceData,
  selectIsLoading,
  selectUserDataInvoisec,
} from "../../redux/selectors";
import { Container, InfoBox } from "./InvoicePage.styled";

interface InvoiceData {
  status: string;
  sending: string;
  receiving: string;
}

export const InvoicePage = () => {
  const dispatch = useDispatch<ThunkDispatch<any, any, any>>();
  const invoiseData = useSelector(selectInvoiceData);
  const isLoading = useSelector(selectIsLoading);
  const userDataInvoisec = useSelector(selectUserDataInvoisec);
  const [invoice, setInvoice] = useState("");

  const hendleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(invoice);

    dispatch(getInvoiceData(invoice));
  };

  const hendleClick = (number: string) => {
    setInvoice(number);
    dispatch(getInvoiceData(number));
  };

  const hendleClearDataInvoices = () => {
    dispatch(clearDataInvoices());
  };

  // const getWarehouses = async () => {
  //   const requestData = {
  //     apiKey: "4adb1c473346a6d181476c1dc87182ee",
  //     modelName: "Address",
  //     calledMethod: "getWarehouses",
  //     methodProperties: {
  //       Language: "uk", // Язык запроса (может быть "ru" или "uk")
  //       CityName: "Київ",
  //     },
  //   };

  //   try {
  //     const response = await axios.post(
  //       "https://api.novaposhta.ua/v2.0/json/",
  //       requestData
  //     );

  //     console.log(response.data);
  //   } catch (error) {
  //     console.error("Ошибка запроса:", error);
  //   }
  // };

  // getWarehouses();

  return (
    <Container>
      <h2>Отримати статус посилки за номером ТТН</h2>
      <form onSubmit={hendleSubmit}>
        <label>
          <input
            type="text"
            pattern="[0-9]{14}"
            placeholder="Enter a 14-digit number"
            maxLength={14}
            required
            value={invoice}
            onChange={(e) => setInvoice(e.target.value)}
          />
        </label>
        <button type="submit">Submit</button>
      </form>

      <InfoBox>
        <div>
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
              <li>Статус доставки: {invoiseData.status}</li>
              <li>Відправлено: {invoiseData.sending}</li>
              <li>Отримано: {invoiseData.receiving}</li>
            </ul>
          )}
        </div>

        <div>
          <h3>Історія</h3>
          <button onClick={hendleClearDataInvoices}>Очистить историю</button>
          {userDataInvoisec.length !== 0 && (
            <ul>
              {userDataInvoisec.map((number, index) => {
                return (
                  <li key={index}>
                    <button onClick={() => hendleClick(number)}>
                      {number}
                    </button>
                  </li>
                );
              })}
            </ul>
          )}
        </div>
      </InfoBox>
    </Container>
  );
};

//   const trackingNumber = "20450754717929";

// Number: "20450754717929";
