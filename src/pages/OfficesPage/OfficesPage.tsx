import React, { useState } from "react";
import { ThunkDispatch } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { getOfficeListByCity } from "../../redux/operations";
import { Office } from "../../interfaces/interfaces";
import { selectOfficeList } from "../../redux/selectors";

export const OfficesPage = () => {
  const dispatch = useDispatch<ThunkDispatch<any, any, any>>();
  const officeList: Office[] = useSelector(selectOfficeList);
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
    <div>
      <p>OfficesPage</p>

      <form onSubmit={hendleSubmit}>
        <label>
          <input
            type="text"
            placeholder="Enter a city"
            required
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
        </label>
        <button type="submit">Submit</button>
      </form>

      <ul>
        {currentItems.map(({ SiteKey, Description }) => {
          return <li key={SiteKey}>{Description}</li>;
        })}
      </ul>

      {/* Pagination */}
      {officeList.length > itemsPerPage && (
        <div>
          <button
            onClick={() => setCurrentPage(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Previous
          </button>
          <span>Page {currentPage}</span>
          <button
            onClick={() => setCurrentPage(currentPage + 1)}
            disabled={lastIndex >= officeList.length}
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};
