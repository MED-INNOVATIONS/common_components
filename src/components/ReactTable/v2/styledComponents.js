import React from "react";
import styled from "styled-components";
import { Row } from "react-bootstrap";

function NoData(props) {
    const StyledDiv = styled.div`
        display: block;
        position: absolute;
        left: 50%;
        top: 40%;
        z-index: 1;
        padding: 20px;
        background-color: white;
        border: 1px solid #dee2e6;
    `;

    return <StyledDiv>{props.children}</StyledDiv>
}

function SubContentContainer(props) {
    const StyledDiv = styled.div`
        border-bottom: 1px solid #dee2e6;
        padding: 15px;
    `;

    return <SubContentContainer>{props.children}</SubContentContainer>
}

function StyledTable(props) {
    const StyledDiv = styled.div`
        display: inline-block;
        border-spacing: 0;
        border: 1px solid #dee2e6;
        width: 100%;
    `;

    return <StyledDiv {...props}>{props.children}</StyledDiv>
}

function StyledTd(props) {
    const StyledDiv = styled.div`
        margin: 0;
        padding: 0.5rem;
        border-bottom: 1px solid #dee2e6;
        border-right: 1px solid #dee2e6;
        position: relative;
    `;

    return <StyledDiv {...props}>{props.children}</StyledDiv>
}

function StyledTh(props) {
    const StyledDiv = styled.div`
        margin: 0;
        padding: 0.5rem;
        border-bottom: 1px solid #dee2e6;
        border-right: 1px solid #dee2e6;
        position: relative;
    `;

    return <StyledDiv {...props}>{props.children}</StyledDiv>
}

function PaginationRow(props) {
    const StyledRow = styled(Row)`
        margin-top: 1rem;
    `;

    return <StyledRow {...props}>{props.children}</StyledRow>
}

function Resizer(props) {
    const StyledDiv = styled.div`
        right: 0;
        background: #dee2e6;
        width: 1px;
        height: 100%;
        position: absolute;
        top: 0;
        z-index: 1;
        touch-action: none;
    `;

    return <StyledDiv {...props}>{props.children}</StyledDiv>
}

function StyledTr(props) {
    const StyledDiv = styled.div`
        &:last-child{
            overflow-x: hidden;
            ${StyledTd}{
                border-bottom: 0;
            }
        }
    `;

    return <StyledDiv {...props}>{props.children}</StyledDiv>
}

export { NoData, SubContentContainer, StyledTable, StyledTd, StyledTh, PaginationRow, Resizer, StyledTr }