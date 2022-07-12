import React from "react";
import { Row, Col, Button, Form } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSort, faSortUp, faSortDown } from "@fortawesome/free-solid-svg-icons";
import _ from "lodash";

export function setEmptyRows(prepareRow, canNextPage, page, pageSize, data) {
    var rows = null;
    if (canNextPage === false && page.length < pageSize && page[0]) {
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
                <div {...row.getRowProps()} className="my_tr">
                    {row.cells.map(cell => {
                        return (
                            <div {...cell.getCellProps()} className="my_td">
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

export function setEmptyHeaders(pageSize, headerGroups) {
    var new_filling_rows = new Array(pageSize);
    var rows = _.map(new_filling_rows, () => {
        return headerGroups.map(headerGroup => (
            <div {...headerGroup.getHeaderGroupProps()} className="my_tr">
                {headerGroup.headers.map(column => (
                    <div {...column.getHeaderProps()} className="my_th">
                        <div style={{ color: "#66000000" }}>.</div>
                    </div>
                ))}
            </div>
        ));
    });
    return rows;
};

export function setSortIcon(column) {
    return (
        <span>
            {column.disableSortBy !== true && column.isSorted === false && (
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

export function setResize(column) {
    return <span>{column.canResize && <div {...column.getResizerProps()} className={`my_resizer ${column.isResizing ? "isResizing" : ""}`} />}</span>;
};

export function setPageSizeOptions(_defaultPageSize, _fixedPageSize) {
    var base_values = [5, 10, 20, 30, 40, 50];
    if (_.includes(base_values, _defaultPageSize) === false) {
        base_values.push(_defaultPageSize);
        base_values = _.sortBy(base_values);
    }

    if (_.includes(base_values, _fixedPageSize) === false) {
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
}

export function getPaginationSection(localization, gotoPage, canPreviousPage, previousPage, canNextPage, nextPage, pageCount, pageIndex, pageOptions, data, pageSize, _fixedPageSize, setPageSize, _defaultPageSize, hidePagination) {
    var self = this;

    return <Row className="pagination" hidden={hidePagination === true}>
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
                disabled={data.length === 0}
                size={"sm"}
                type="number"
                min={1}
                max={pageOptions.length}
                value={pageIndex + 1}
                onChange={e => {
                    const page = e.target.value ? Number(e.target.value) - 1 : 0;
                    gotoPage(page);
                }}
                style={{ width: "100%" }}>
            </Form.Control>
        </Col>
        <Col sm={2}>
            <Form.Control
                as="select"
                size={"sm"}
                value={pageSize}
                disabled={_fixedPageSize != null || data.length === 0}
                onChange={e => {
                    setPageSize(Number(e.target.value));
                }}>
                {self.setPageSizeOptions(_defaultPageSize, _fixedPageSize)}
            </Form.Control>
        </Col>
    </Row>
}