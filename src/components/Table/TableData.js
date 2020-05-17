import React, { useState } from "react";
import { useTable, useSortBy, usePagination, useFilters } from "react-table";
import cn from "classnames";
import Recover from "./common/recover";
import Deaths from "./common/deaths";
import Confirm from "./common/confirm";
import Active from "./common/Active";

import style from "./TableData.module.css";

const TableData = ({ data }) => {
  const columns = React.useMemo(
    () => [
      {
        Header: <span className="text-secondary">District</span>,
        accessor: "district",
      },
      {
        Header: <span className="text-danger">Cnfrmd</span>,
        id: "1",
        accessor: (d) => <Confirm data={d} />,
      },
      {
        Header: <span className="text-primary">Actv</span>,
        id: "aff",
        accessor: (d) => <Active data={d} />,
      },
      {
        Header: <span className="text-success">Rcvrd</span>,
        id: "2",
        accessor: (d) => <Recover data={d} />,
      },
      {
        Header: <span className="text-secondary">Deaths</span>,
        id: 3,
        accessor: (d) => <Deaths data={d} />,
      },
    ],
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    //rows,
    prepareRow,
    page,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    setFilter,
    state: { pageIndex, pageSize },
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0 },
      manualPagination: false,
    },
    useFilters,
    useSortBy,
    usePagination
  );

  const [filterInput, setFilterInput] = useState("");
  const handleFilterChange = (e) => {
    const value = e.target.value || undefined;
    setFilter("district", value);
    setFilterInput(value);
  };

  return (
    <div className={cn(style.myContainer, "mb-3")}>
      <form className={cn(style.inputIcons, "m-3")}>
        <i className={cn("fa fa-search", style.icon)}></i>
        <input
          className={cn("form-control", style.inputField)}
          value={filterInput}
          onChange={handleFilterChange}
          placeholder={"Search District"}
        />
      </form>

      <div className="table-responsive-sm">
        <table
          {...getTableProps()}
          className={cn("table table-striped table-sm", style.table)}
        >
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr
                {...headerGroup.getHeaderGroupProps()}
                className="table-light"
              >
                {headerGroup.headers.map((column) => (
                  <th
                    {...column.getHeaderProps(column.getSortByToggleProps())}
                    style={{ fontSize: "14px" }}
                  >
                    {column.render("Header")}
                    {/* Add a sort direction indicator */}
                    <span>
                      {column.isSorted ? (column.isSortedDesc ? "▼" : "▲") : ""}
                    </span>
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {page.map((row, i) => {
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
      </div>

      <div className="conatiner">
        <div className="d-flex flex-row">
          <div className="Page navigation d-flex justify-content-between ml-2">
            <ul className="pagination">
              <li>
                <button
                  className="page-item page-link"
                  onClick={() => gotoPage(0)}
                  disabled={!canPreviousPage}
                >
                  {"<<"}
                </button>
              </li>
              <li>
                <button
                  className="page-item page-link"
                  onClick={() => previousPage()}
                  disabled={!canPreviousPage}
                >
                  {"<"}
                </button>
              </li>

              <li>
                <button
                  className="page-item page-link"
                  onClick={() => nextPage()}
                  disabled={!canNextPage}
                >
                  {">"}
                </button>
              </li>
              <li>
                <button
                  className="page-item page-link"
                  onClick={() => gotoPage(pageCount - 1)}
                  disabled={!canNextPage}
                >
                  {">>"}
                </button>{" "}
              </li>
            </ul>
          </div>

          {/* 
            <span>
              Page{" "}
              <strong>
                {pageIndex + 1} of {pageOptions.length}
              </strong>{" "}
            </span>
            */}

          <form className="form-group d-flex justify-content-between ml-2">
            <input
              className="form-control"
              placeholder={`Go ${pageIndex + 1} to ${pageOptions.length}`}
              type="number"
              //defaultValue={pageIndex + 1}
              onChange={(e) => {
                const page = e.target.value ? Number(e.target.value) - 1 : 0;
                gotoPage(page);
              }}
            />

            <select
              className="custom-select mx-2"
              value={pageSize}
              onChange={(e) => {
                setPageSize(Number(e.target.value));
              }}
            >
              {[10, 20, 30, 40].map((pageSize) => (
                <option key={pageSize} value={pageSize}>
                  Show no. of district - {pageSize}
                </option>
              ))}
            </select>
          </form>
        </div>
      </div>
    </div>
  );
};

export default TableData;
