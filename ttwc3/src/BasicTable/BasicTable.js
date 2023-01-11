import React, { useMemo } from "react";
import { useTable, useGlobalFilter, useSortBy, useFilters } from "react-table"; // пакет таблицы

import MOCK_DATA from "../../utils/data_base/MOCK_DATA.json"; //база данных
import { COLUMNS } from "../../utils/const/сolumns"; // массив столбцов
import "./BasicTable.css";
import arrowSort from "../../images/arrow-down_icon-icons.com_72377.svg";
import { GlobalSearch } from "../GlobalSearch/GlobalSearch";
import { ColumnSearch } from "../ColumnSearch/ColumnSearch";

export const BasicTable = () => {
  const columns = useMemo(() => COLUMNS, []); // useMemo гарантирует, что даннные не будут воссоздаватьсяпри каждом рендеринге
  const data = useMemo(() => MOCK_DATA, []); // useMemo запоминает столбцы и строки и данные не нужно пересчитывать
  const defaultColumn = useMemo(() => {
    // устанавливает инпут фильтрации на каждую колонку поумолчанию. Можно вкл и выкл на стороне разработчика выборочно
    return {
      Filter: ColumnSearch,
    };
  }, []);

  const tableInstance = useTable(
    {
      // useTable вернет экземпляр таблицы который мы сохраним в константе
      columns,
      data,
      defaultColumn,
    },
    useGlobalFilter,
    useFilters,
    useSortBy
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups, //содержт информацию о заголовке столбца
    rows,
    prepareRow,
    state,
    setGlobalFilter,
  } = tableInstance; // функции и массивы которые дает useTAble

  const { globalFilter } = state;

  return (
    <>
      <GlobalSearch filter={globalFilter} setFilter={setGlobalFilter} />
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                  <span>
                    {column.isSorted ? (
                      column.isSortedDesc ? (
                        <img
                          className="arrow-sort"
                          src={arrowSort}
                          alt="down"
                        />
                      ) : (
                        <img
                          className="arrow-sort arrow-sort_rotate"
                          src={arrowSort}
                          alt="up"
                        />
                      )
                    ) : (
                      ""
                    )}
                  </span>
                  {column.render("Header")}
                  <div className="column-search__box">
                    {column.canFilter ? column.render("Filter") : null}
                  </div>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};
