import React from "react";
import "./ExpandedRow.css";

export const ExpandedRow = (props) => {
  return (
    <div className="expanded__box">
      <iframe title="maps"
        src="https://yandex.ru/map-widget/v1/?um=constructor%3A611840fa941b6b7f6d0b8525b4539189bfd4f5b28af0db1a119149e6404b9188&amp;source=constructor"
        width="320"
        height="240"
        frameborder="0"
      ></iframe>
      <ul>
     
        <li><p>Дата: {props.data_time}</p></li>
        <li><p>Номер тоопливной карты: {props.gasoline_card}</p></li>
        <li><p>Сумма: {props.cost}</p></li>
        <li><p>Объем, л: {props.in_tank}</p></li>
      
      </ul>
    </div>
  );
};
