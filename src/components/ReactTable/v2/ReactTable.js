import React, { useEffect } from "react";
import { useTable, useExpanded, usePagination, useSortBy, useRowSelect, useResizeColumns, useFlexLayout } from "react-table";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import _ from "lodash";

import { NoData, SubContentContainer, StyledTable, StyledTh, StyledTr } from "./styledComponents";
import * as Utils from "./Utils";

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
    selectedFlatRows,
    state: { pageIndex, pageSize, expanded, selectedRowIds }
  } = useTable(
    {
      columns,
      data,
      autoResetPage: !skipPageReset,
      initialState: {
        // pageIndex: 0,
        pageSize: _fixedPageSize || _defaultPageSize || 10
      },
      enableMultiRowSelection: true
    },
    useSortBy,
    useExpanded,
    usePagination,
    useResizeColumns,
    useFlexLayout,
    useRowSelect
  );

  return (
    <React.Fragment>
      <StyledTable {...getTableProps()}>
        <div>
          {headerGroups.map(headerGroup => (
            <StyledTr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <StyledTh {...column.getHeaderProps()}>
                  {column.render("Header")}
                  {Utils.setSortIcon(column)}
                  {Utils.setResize(column)}
                </StyledTh>
              ))}
            </StyledTr>
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
            return <React.Fragment key={i}>
              <StyledTr {...row.getRowProps()}>
                {row.cells.map((cell, index) => {
                  return <StyledTh key={index} {...cell.getCellProps()}>
                    {cell.render("Cell")}
                  </StyledTh>
                })}
              </StyledTr>
              {row.isExpanded ? <SubContentContainer>{row.original.subContent}</SubContentContainer> : null}
            </React.Fragment>
          })}
          {data.length > 0 && <span>{Utils.setEmptyRows(prepareRow, canNextPage, page, pageSize, data)}</span>}
        </div>
        {data.length === 0 && (
          <NoData>
            <FontAwesomeIcon icon={faInfoCircle} /> {_noDataMessage || "No data"}
          </NoData>
        )}
      </StyledTable>
      {Utils.getPaginationSection(localization, gotoPage, canPreviousPage, previousPage, canNextPage, nextPage, pageCount, pageIndex, pageOptions, data, pageSize, _fixedPageSize, setPageSize, _defaultPageSize, hidePagination)}
    </React.Fragment>
  );
}
export default ReactTable;