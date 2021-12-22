import styled from 'styled-components'

export const boxGradientBorderBackgroundDivVertical = (width: any, height: any) => {
    return styled.div `
        width:  ${width ? `${width}%` : `100%`};
        height: ${height ? height : `15em`};
        padding: 1px 1px 0 1px;
        background: linear-gradient(to bottom, #126060,#000000);
        border-radius: 17px;

    `
}

export const boxGradientBorderBackgroundSpanVertical = styled.span `
    font-family: Orbitron;
    padding: 17px 3px 0 7px;
    font-size: 15px;
    color: #707070;
    text-align: left;
    background: #000;
    display: block;
    border-radius: 17px;
    width: 100%;
    height: 100%;
`