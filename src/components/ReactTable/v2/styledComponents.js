import React from "react";
import styled from "styled-components";
import { Row } from "react-bootstrap";

const StyledDivNoData = styled.div`
    display: block;
    position: absolute;
    left: 50%;
    top: 40%;
    z-index: 1;
    padding: 20px;
    background-color: white;
    border: 1px solid #dee2e6;
`;

function NoData(props) {
    return <StyledDivNoData>{props.children}</StyledDivNoData>
}


const StyledDivSubContentContainer = styled.div`
    border-bottom: 1px solid #dee2e6;
    padding: 15px;
`;

function SubContentContainer(props) {
    return <StyledDivSubContentContainer>{props.children}</StyledDivSubContentContainer>
}

const StyledDivTable = styled.div`
    display: inline-block;
    border-spacing: 0;
    border: 1px solid #dee2e6;
    width: 100%;
`;

function StyledTable(props) {
    return <StyledDivTable {...props}>{props.children}</StyledDivTable>
}

const StyledDivTd = styled.div`
    margin: 0;
    padding: 0.5rem;
    border-bottom: 1px solid #dee2e6;
    border-right: 1px solid #dee2e6;
    position: relative;
`;
function StyledTd(props) {
    return <StyledDivTd {...props}>{props.children}</StyledDivTd>
}

const StyledDivTh = styled.div`
    margin: 0;
    padding: 0.5rem;
    border-bottom: 1px solid #dee2e6;
    border-right: 1px solid #dee2e6;
    position: relative;
`;
function StyledTh(props) {
    return <StyledDivTh {...props}>{props.children}</StyledDivTh>
}

const StyledRow = styled(Row)`
    margin-top: 1rem;
`;
function PaginationRow(props) {
    return <StyledRow {...props}>{props.children}</StyledRow>
}

const StyledDivResizer = styled.div`
    right: 0;
    background: #dee2e6;
    width: 1px;
    height: 100%;
    position: absolute;
    top: 0;
    z-index: 1;
    touch-action: none;
`;
function Resizer(props) {
    return <StyledDivResizer {...props}>{props.children}</StyledDivResizer>
}

const StyledDivTr = styled.div`
&:last-child{
    overflow-x: hidden;
    ${StyledTd}{
        border-bottom: 0;
    }
}
`;
function StyledTr(props) {
    return <StyledDivTr {...props}>{props.children}</StyledDivTr>
}

export { NoData, SubContentContainer, StyledTable, StyledTd, StyledTh, PaginationRow, Resizer, StyledTr }