import React from "react";
import ReactExport from "react-data-export";
import MOCK_DATA from "../utils/data_base/MOCK_DATA.json"; //база данных
import iconXls from "../images/xls_vwkoa3gnupbe_16.png";

const ExcelFile = ReactExport.ExcelFile;
const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;
const ExcelColumn = ReactExport.ExcelFile.ExcelColumn;

export const ExportXls = React.memo((props) => {
  const dataBase = MOCK_DATA;
  return (
    <ExcelFile
      element={
        <button>
          <img className="icon-xls" src={iconXls} alt="Скачать XLS" />
          bb
        </button>
      }
    >
      <ExcelSheet data={dataBase} name="WorkBase">
        <ExcelColumn label="Транспорт" value="auto_name" />
        <ExcelColumn label="Дата" value="data_time" />
        <ExcelColumn label="Карта" value="gasoline_card" />
        <ExcelColumn label="АЗС/АТЗ" value="type_of_refueling" />
        <ExcelColumn label="Адрес" value="gas_station_address" />
        <ExcelColumn label="Тип топлива" value="type_of_gasoline" />
        <ExcelColumn label="Приход" value="in_tank" />
        <ExcelColumn label="Расход" value="fuel_rate" />
        <ExcelColumn label="Бак, л" value="value_tank" />
        <ExcelColumn label="Стоимость" value="cost" />
      </ExcelSheet>
    </ExcelFile>
  );
});
