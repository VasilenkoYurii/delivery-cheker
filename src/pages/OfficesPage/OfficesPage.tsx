import React, { useState } from "react";
import { ThunkDispatch } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { getOfficeListByCity } from "../../redux/operations";
import { Office } from "../../interfaces/interfaces";
import { selectOfficeList, selectIsLoading } from "../../redux/selectors";
import { RotatingLines } from "react-loader-spinner";
import {
  Container,
  PageTitle,
  Form,
  Label,
  Input,
  SubmitButton,
  ListItem,
  OfficeList,
  PaginationContainer,
  LoaderContainer,
} from "./OfficesPage.styled";

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
  const currentItems = officeList.slice(firstIndex, lastIndex);

  return (
    <Container>
      <div>
        <PageTitle>Пошук відділень та поштоматів у вашому місті</PageTitle>

        <Form onSubmit={hendleSubmit}>
          <Label>
            <Input
              type="text"
              placeholder="Enter a city"
              required
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
          </Label>
          <SubmitButton type="submit">Submit</SubmitButton>
        </Form>
      </div>

      {isLoading ? (
        <LoaderContainer>
          <RotatingLines
            strokeColor="#fa4a3b"
            strokeWidth="5"
            animationDuration="0.75"
            width="96"
            visible={true}
          />
        </LoaderContainer>
      ) : (
        <OfficeList>
          {currentItems.map(({ SiteKey, Description }) => {
            return <ListItem key={SiteKey}>{Description}</ListItem>;
          })}
        </OfficeList>
      )}
      {officeList.length > itemsPerPage && (
        <PaginationContainer>
          <button
            onClick={() => setCurrentPage(currentPage - 1)}
            disabled={currentPage === 1}
          >
            {"<"}
          </button>
          <span>Сторінка {currentPage}</span>
          <button
            onClick={() => setCurrentPage(currentPage + 1)}
            disabled={lastIndex >= officeList.length}
          >
            {">"}
          </button>
        </PaginationContainer>
      )}
    </Container>
  );
};
