import React, { useEffect } from "react";
import { useTable, useExpanded, usePagination, useSortBy, useRowSelect, useResizeColumns, useFlexLayout } from "react-table";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import _ from "lodash";

import * as Utils from "./Utils";

import "bootstrap/dist/css/bootstrap.min.css";
import "./reactTable.css";

function ReactTable({ localization, columns, data, _defaultPageSize, _fixedPageSize, _noDataMessage, skipPageReset, hidePagination }) {
  useEffect(() => {
    var tableSize = _fixedPageSize || _defaultPageSize || pageSize
    setPageSize(tableSize)
  }, [_fixedPageSize, _defaultPageSize]);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    rows,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    visibleColumns,
    state: { pageIndex, pageSize, expanded }
  } = useTable(
    {
      columns,
      data,
      autoResetPage: !skipPageReset,
      initialState: {
        // pageIndex: 0,
        pageSize: _fixedPageSize || _defaultPageSize || 10
      }
    },
    useSortBy,
    useExpanded,
    usePagination,
    useResizeColumns,
    useFlexLayout,
    useRowSelect,
  );

  return (
    <div>
      <div {...getTableProps()} className="my_table">
        <div>
          {headerGroups.map(headerGroup => (
            <div {...headerGroup.getHeaderGroupProps()} className="my_tr">
              {headerGroup.headers.map(column => (
                <div {...column.getHeaderProps()} className="my_th">
                  {column.render("Header")}
                  {Utils.setSortIcon(column)}
                  {Utils.setResize(column)}
                </div>
              ))}
            </div>
          ))}
          {data.length === 0 && <span>{Utils.setEmptyHeaders(pageSize, headerGroups)}</span>}
        </div>
        <div {...getTableBodyProps()}>
          {page.map((row, i) => {
            //custom code => it's not automatic as shown in library documentation
            if (row.original && row.original.subContent && _.isEmpty(row.original.subContent) === false) {
              row.canExpand = true;
            }
            //============================================//
            prepareRow(row);
            return (
              <React.Fragment>
                <div {...row.getRowProps()} className="my_tr">
                  {row.cells.map(cell => {
                    return (
                      <div {...cell.getCellProps()} className="my_th">
                        {cell.render("Cell")}
                      </div>
                    );
                  })}
                </div>
                {row.isExpanded ? <div className="sub_content_container">{row.original.subContent}</div> : null}
              </React.Fragment>
            );
          })}
          {data.length > 0 && <span>{Utils.setEmptyRows(prepareRow, canNextPage, page, pageSize, data)}</span>}
        </div>
        {data.length === 0 && (
          <div className="noData">
            <FontAwesomeIcon icon={faInfoCircle} /> {_noDataMessage || "No data"}
          </div>
        )}
      </div>
      {Utils.getPaginationSection(localization, gotoPage, canPreviousPage, previousPage, canNextPage, nextPage, pageCount, pageIndex, pageOptions, data, pageSize, _fixedPageSize, setPageSize, _defaultPageSize, hidePagination)}
    </div>
  );
}
export default ReactTable;