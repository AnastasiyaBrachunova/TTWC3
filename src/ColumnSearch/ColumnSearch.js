import React from "react";
import "./ColumnSearch.css";

export const ColumnSearch = ({ column }) => {
  const { filterValue, setFilter } = column;

  return (
    <>
      <input
        className="column-search__input"
        value={filterValue || ""}
        onChange={(e) => setFilter(e.target.value)}
        type="search"
        name="q"
        placeholder="Поиск"
      />
    </>
  );
};
