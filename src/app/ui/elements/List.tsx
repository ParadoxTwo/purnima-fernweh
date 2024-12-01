'use client';

import styled from "styled-components";

export const Li = styled.li<{mb?: number}>`
    &:not(:last-of-type) {
        margin-bottom: ${({ mb }) => mb ? `${mb * 8}px` :  "8px"};
    }    
`;

export const Ol = styled.ol<{pl?: number}>`
    font-family: var(--font-geist-mono);
    padding-left: 0;
    margin: 0;
    font-size: 14px;
    line-height: 24px;
    letter-spacing: -0.01em;
    list-style-position: inside;
`;