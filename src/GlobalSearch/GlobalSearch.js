import React, { useState } from "react";
import { useAsyncDebounce } from "react-table";
import "./GlobalSearch.css";

import find from "../images/lupa.png";

export const GlobalSearch = ({ filter, setFilter }) => {
  const [value, setValue] = useState(filter);
  const onChange = useAsyncDebounce((value) => {
    setFilter(value || undefined);
  }, 300); //асинхронный запрос для поиска, увеличит производительность если много строк в таблице
  return (
    <div className="global-search__box">
      <input
        className="global-search__input"
        value={value || ""}
        onChange={(e) => {
          setValue(e.target.value);
          onChange(e.target.value);
        }}
        type="search"
        name="q"
        placeholder="Поиск"
      />
      <img className="global-search__img" src={find} alt="Поиск" />
    </div>
  );
};
