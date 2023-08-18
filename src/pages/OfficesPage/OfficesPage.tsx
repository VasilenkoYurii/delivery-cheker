import React, { useState } from "react";
import { ThunkDispatch } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { getOfficeListByCity } from "../../redux/operations";
import { Office } from "../../interfaces/interfaces";
import { selectOfficeList, selectIsLoading } from "../../redux/selectors";
import { GetDataForm } from "../../components/GetInvoiceForm/GetDataForm";
import { Pagination } from "../../components/Pagination/Pagination";
import { Loader } from "../../components/Loader/Loader";
import { Container, ListItem, OfficeList } from "./OfficesPage.styled";

export const OfficesPage = () => {
  const dispatch = useDispatch<ThunkDispatch<any, any, any>>();
  const officeList: Office[] = useSelector(selectOfficeList);
  const isLoading = useSelector(selectIsLoading);
  const [city, setCity] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 100;

  const hendleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setCurrentPage(1);
    dispatch(getOfficeListByCity(city));
  };

  const lastIndex = currentPage * itemsPerPage;
  const firstIndex = lastIndex - itemsPerPage;
  const currentItems: Office[] = officeList.slice(firstIndex, lastIndex);

  console.log(currentItems);

  return (
    <Container>
      <div>
        <GetDataForm
          hendleSubmit={hendleSubmit}
          setState={setCity}
          value={city}
          title={"Пошук відділень та поштоматів у вашому місті"}
          buttonContent={"ЗНАЙТИ"}
          placeholder={"Ваше місто"}
          pattern={".*"}
        />
      </div>

      {isLoading ? (
        <Loader />
      ) : (
        <OfficeList>
          {currentItems.map(({ SiteKey, Description }) => {
            return <ListItem key={SiteKey}>{Description}</ListItem>;
          })}
        </OfficeList>
      )}
      {officeList.length > itemsPerPage && (
        <Pagination
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
          lastIndex={lastIndex}
          officeList={officeList}
        />
      )}
    </Container>
  );
};
