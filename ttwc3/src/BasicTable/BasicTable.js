import React, { useMemo } from "react";
import {
  useTable,
  useGlobalFilter,
  useSortBy,
  useFilters,
  usePagination,
} from "react-table"; // пакет таблицы

import MOCK_DATA from "../utils/data_base/MOCK_DATA.json"; //база данных
import { COLUMNS } from "../utils/const/columns"; // массив столбцов
import "./BasicTable.css";

import arrowSort from "../images/arrow-down_icon-icons.com_72377.svg";
import { GlobalSearch } from "../GlobalSearch/GlobalSearch";
import { ColumnSearch } from "../ColumnSearch/ColumnSearch";
import { Pagination } from "../Pagination/Pagination";
import { SetShowPage } from "../SetShowPage/SetShowPage";
import { HiddenColumns } from "../HiddenColumns/HiddenColumns";
// import { ExportXls } from "../ExportXls/ExportXls";

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
    useSortBy,
    usePagination
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups, //содержт информацию о заголовке столбца
    page,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    pageOptions,
    gotoPage,
    pageCount,
    setPageSize,
    prepareRow,
    allColumns,
    state,
    setGlobalFilter,
  } = tableInstance; // функции и массивы которые дает useTAble

  const { globalFilter, pageIndex, pageSize } = state;

  return (
    <>
      <div className="option-table__box">
        <SetShowPage
          pageSize={pageSize}
          setPageSize={(e) => setPageSize(Number(e.target.value))}
        />
        {/* <ExportXls /> */}
        <GlobalSearch filter={globalFilter} setFilter={setGlobalFilter} />
      </div>
      <HiddenColumns allColumns={allColumns} />

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
          {page.map((row) => {
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
      <Pagination
        nextPage={() => nextPage()}
        previousPage={() => previousPage()}
        pageOptions={pageOptions}
        pageIndex={pageIndex}
        canPreviousPage={canPreviousPage}
        canNextPage={canNextPage}
        gotoPageBack={() => gotoPage(0)}
        gotoPageNext={() => gotoPage(pageCount - 1)}
      />
    </>
  );
};
