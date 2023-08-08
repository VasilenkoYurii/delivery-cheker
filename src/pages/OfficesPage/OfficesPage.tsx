import React, { useState } from "react";
import { ThunkDispatch } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { getOfficeListByCity } from "../../redux/operations";

import { selectOfficeList } from "../../redux/selectors";

export const OfficesPage = () => {
  const dispatch = useDispatch<ThunkDispatch<any, any, any>>();
  const officeList: object[] = useSelector(selectOfficeList);
  const [city, setCity] = useState("");

  const hendleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    dispatch(getOfficeListByCity(city));
  };

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
      {/* Description */}
      {/* <ul>
        {officeList.map(({ SiteKey, Description }) => {
          return <li key={office.SiteKey}></li>;
        })}
      </ul> */}
    </div>
  );
};
