import React from 'react'
import styled from 'styled-components'
import IconStyle from './IconStyle'

const Svg = styled(IconStyle)`
    width: 24px;
    height: 24px;
`;

export const UpIcon = ({color = "black"}) => (
    <Svg viewBox="0 0 6 5" fill="none">
        <title>Sorting up</title>
        <path fill="currentColor" d="M2.6537 1.1C2.80766 0.833334 3.19256 0.833333 3.34652 1.1L5.25177 4.4C5.40573 4.66667 5.21328 5 4.90536 5H1.09485C0.786931 5 0.594481 4.66667 0.748441 4.4L2.6537 1.1Z" ></path>
    </Svg>
)

export const DownIcon = ({color = "black"}) => (
    <Svg viewBox="0 0 6 5" fill="none">
        <title>Sorting down</title>
        <path fill="currentColor" d="M3.34641 3.9C3.19245 4.16667 2.80755 4.16667 2.65359 3.9L0.748335 0.599999C0.594375 0.333333 0.786825 -4.5575e-07 1.09474 -4.28831e-07L4.90526 -9.57056e-08C5.21318 -6.87864e-08 5.40563 0.333333 5.25167 0.6L3.34641 3.9Z"></path>
    </Svg>
)