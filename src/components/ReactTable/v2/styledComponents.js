import React from "react";
import styled from "styled-components";
import { Row } from "react-bootstrap";

const NoData = styled.div`
    display: block;
    position: absolute;
    left: 50%;
    top: 40%;
    z-index: 1;
    padding: 20px;
    background-color: white;
    border: 1px solid #dee2e6;
`;

const SubContentContainer = styled.div`
    border-bottom: 1px solid #dee2e6;
    padding: 15px;
`;

const StyledTable = styled.div`
    display: inline-block;
    border-spacing: 0;
    border: 1px solid #dee2e6;
    width: 100%;
`;

const StyledTd = styled.div`
    margin: 0;
    padding: 0.5rem;
    border-bottom: 1px solid #dee2e6;
    border-right: 1px solid #dee2e6;
    position: relative;
`;

const StyledTh = styled.div`
    margin: 0;
    padding: 0.5rem;
    border-bottom: 1px solid #dee2e6;
    border-right: 1px solid #dee2e6;
    position: relative;
`;

const PaginationRow = styled(Row)`
    margin-top: 1rem;
`;

const Resizer = styled.div`
    right: 0;
    background: #dee2e6;
    width: 1px;
    height: 100%;
    position: absolute;
    top: 0;
    z-index: 1;
    touch-action: none;
`;

const StyledTr = styled.div`
&:last-child{
    overflow-x: hidden;
    ${StyledTd}{
        border-bottom: 0;
    }
}
`;

export { NoData, SubContentContainer, StyledTable, StyledTd, StyledTh, PaginationRow, Resizer, StyledTr }