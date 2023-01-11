import React from "react";
import "./SetShowPage.css";

export const SetShowPage = (props) => {
  return (
    <div className="dropdown-list__box">
      <p className="dropdown-list__signature">Показывать</p>
      <select
        className="dropdown-list__cell"
        value={props.pageSize}
        onChange={props.setPageSize}
      >
        {[10, 25, 50].map((pageSize) => (
          <option
            className="dropdown-list__option-list"
            key={pageSize}
            value={pageSize}
          >
            {pageSize}
          </option>
        ))}
      </select>
    </div>
  );
};
