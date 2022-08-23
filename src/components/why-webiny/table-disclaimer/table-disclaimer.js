import React from "react";
import styled from "react-emotion";

const StyledParagraph = styled.p`
    text-align: center;
    margin: 0 auto 120px auto;
    font-size: 12px;
`;

const TableDisclaimer = () => {
    return (
        <StyledParagraph>
            This information was gathered from publicly available information on the websites of
            these providers. Last update Mar 2022.
        </StyledParagraph>
    );
};

export default TableDisclaimer;
