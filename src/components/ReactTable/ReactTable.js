import React from "react";
import { Row, Col, Button, Form } from "react-bootstrap";
import { useTable, useExpanded, usePagination, useSortBy, useRowSelect, useResizeColumns, useFlexLayout } from "react-table";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSort, faSortUp, faSortDown, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import _ from "lodash";


import "bootstrap/dist/css/bootstrap.min.css";

const Styles = styled.div`
  .table {
    display: inline-block;
    border-spacing: 0;
    border: 1px solid #dee2e6;

    .tr {
      :last-child {
        .td {
          border-bottom: 0;
        }
      }
      .td {
        overflow-x: hidden;
      }
    }

    .th,
    .td {
      margin: 0;
      padding: 0.5rem;
      border-bottom: 1px solid #dee2e6;
      border-right: 1px solid #dee2e6;

      ${"" /* In this example we use an absolutely position resizer,
        so this is required. */}
      position: relative;

      :last-child {
        border-right: 0;
      }

      .resizer {
        right: 0;
        background: #dee2e6;
        width: 1px;
        height: 100%;
        position: absolute;
        top: 0;
        z-index: 1;
        ${"" /* prevents from scrolling while dragging on touch devices */}
        touch-action :none;

        &.isResizing {
          background: black;
        }
      }
    }
  }
`;


function ReactTable({ localization, columns, data, _defaultPageSize, _fixedPageSize, _noDataMessage, skipPageReset }) {
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

  var setPageSizeOptions = () => {
    var base_values = [5, 10, 20, 30, 40, 50];
    if (_.includes(base_values, _defaultPageSize) == false) {
      base_values.push(_defaultPageSize);
      base_values = _.sortBy(base_values);
    }

    if (_.includes(base_values, _fixedPageSize) == false) {
      base_values.push(_fixedPageSize);
      base_values = _.sortBy(base_values);
    }

    var options = _.map(base_values, (value, index) => {
      return (
        <option key={index} value={value}>
          {value}
        </option>
      );
    });
    return options;
  };

  var setSortIcon = column => {
    return (
      <span>
        {column.disableSortBy != true && column.isSorted == false && (
          <span>
            {" "}
            <FontAwesomeIcon
              icon={faSort}
              style={{ cursor: "pointer" }}
              onClick={() => {
                column.toggleSortBy();
              }}
            />
          </span>
        )}
        <span>
          {column.isSorted ? (
            column.isSortedDesc ? (
              <span>
                {" "}
                <FontAwesomeIcon
                  icon={faSortDown}
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    column.toggleSortBy();
                  }}
                />
              </span>
            ) : (
              <span>
                {" "}
                <FontAwesomeIcon
                  icon={faSortUp}
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    column.toggleSortBy();
                  }}
                />
              </span>
            )
          ) : (
            ""
          )}
        </span>
      </span>
    );
  };

  var setResize = column => {
    return <span>{column.canResize && <div {...column.getResizerProps()} className={`resizer ${column.isResizing ? "isResizing" : ""}`} />}</span>;
  };

  var setEmptyRows = () => {
    var rows = null;
    if (canNextPage == false && page.length < pageSize && page[0]) {
      var new_filling_rows = pageSize - page.length;
      new_filling_rows = new Array(new_filling_rows);
      var page_tmp = _.map(new_filling_rows, f => {
        return page[0];
      });
      rows = page_tmp.map((row, i) => {
        var new_id = data.length + i;
        row.id = new_id;
        prepareRow(row);
        return (
          <div {...row.getRowProps()} className="tr">
            {row.cells.map(cell => {
              return (
                <div {...cell.getCellProps()} className="td">
                  <div style={{ color: "#66000000" }}>.</div>
                </div>
              );
            })}
          </div>
        );
      });
    }
    return rows;
  };

  var setEmptyHeaders = () => {
    var new_filling_rows = new Array(pageSize);
    var rows = _.map(new_filling_rows, () => {
      return headerGroups.map(headerGroup => (
        <div {...headerGroup.getHeaderGroupProps()} className="tr">
          {headerGroup.headers.map(column => (
            <div {...column.getHeaderProps()} className="th">
              <div style={{ color: "#66000000" }}>.</div>
            </div>
          ))}
        </div>
      ));
    });
    return rows;
  };

  return (
    <Styles>
      <div>
        <div {...getTableProps()} className="table">
          <div>
            {headerGroups.map(headerGroup => (
              <div {...headerGroup.getHeaderGroupProps()} className="tr">
                {headerGroup.headers.map(column => (
                  <div {...column.getHeaderProps()} className="th">
                    {column.render("Header")}
                    {setSortIcon(column)}
                    {setResize(column)}
                  </div>
                ))}
              </div>
            ))}
            {data.length == 0 && <span>{setEmptyHeaders()}</span>}
          </div>
          <div {...getTableBodyProps()}>
            {page.map((row, i) => {
              prepareRow(row);
              return (
                <div {...row.getRowProps()} className="tr">
                  {row.cells.map(cell => {
                    return (
                      <div {...cell.getCellProps()} className="td">
                        {cell.render("Cell")}
                      </div>
                    );
                  })}
                </div>
              );
            })}
            {data.length > 0 && <span>{setEmptyRows()}</span>}
          </div>
          {data.length == 0 && (
            <div className="noData">
              <FontAwesomeIcon icon={faInfoCircle} /> {_noDataMessage || "No data"}
            </div>
          )}
        </div>
      </div>
      <Row className="pagination">
        <Col sm={8}>
          <span>
            <Button variant="outline-secondary" size={"sm"} onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
              {" "}
              {"<<"}
            </Button>{" "}
            <Button variant="outline-secondary" size={"sm"} onClick={() => previousPage()} disabled={!canPreviousPage}>
              {" "}
              {"<"}
            </Button>{" "}
            <Button variant="outline-secondary" size={"sm"} onClick={() => nextPage()} disabled={!canNextPage}>
              {" "}
              {">"}
            </Button>{" "}
            <Button variant="outline-secondary" size={"sm"} onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
              {" "}
              {">>"}
            </Button>{" "}
            <span style={{ float: "right" }}>
              <span>
                {localization.page || "Page"}{" "}
                <strong>
                  {pageIndex + 1} {localization.of || "of"} {pageOptions.length}
                </strong>{" "}
              </span>
              <span>| {localization.go_to_page}: </span>
            </span>
          </span>
        </Col>
        <Col sm={2}>
          <Form.Control
            disabled={data.length == 0}
            size={"sm"}
            type="number"
            min={1}
            max={pageOptions.length}
            value={pageIndex + 1}
            onChange={e => {
              const page = e.target.value ? Number(e.target.value) - 1 : 0;
              gotoPage(page);
            }}
            style={{ width: "100%" }}
          ></Form.Control>
        </Col>
        <Col sm={2}>
          <Form.Control
            as="select"
            size={"sm"}
            value={pageSize}
            disabled={_fixedPageSize != null || data.length == 0}
            onChange={e => {
              setPageSize(Number(e.target.value));
            }}
          >
            {setPageSizeOptions()}
          </Form.Control>
        </Col>
      </Row>
    </Styles>
  );
}
export default ReactTable;