import React from "react";
import "./HiddenColumns.css";

export const HiddenColumns = (props) => {
  return (
    <div className="hidden-columns__box">
      {props.allColumns.map((column) => (
        <div key={column.id}>
          <label>
            <input type="checkbox" {...column.getToggleHiddenProps()} />
            {column.Header}
          </label>
        </div>
      ))}
    </div>
  );
};
