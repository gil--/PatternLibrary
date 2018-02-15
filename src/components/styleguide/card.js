import React from 'react'
import styled from 'styled-components';

const Card = props => {
    const subtitle = props.subtitle ? <CardSubtitle>{props.subtitle}</CardSubtitle> : null;
    const label = props.label ? <CardLabel isVariable={props.isVariable}><span>{props.label}</span></CardLabel> : null;

    return (
        <CardContainer key={props.index} color={props.color}>
            <CardFill color={props.color} height={props.height}>
                {props.children}
            </CardFill>
            <CardTitle>{props.title}</CardTitle>
            {subtitle}
            {label}
        </CardContainer>
    )
}

export default Card

/*
    Styles
*/
const CardContainer = styled.li`
    margin: 0;
    padding: 20px;
    text-align: left;
    box-shadow: 0 0 20px #0000001a;
    border: 2px solid var(--sg-border-color);
    border-radius: var(--sg-border-radius);

    &:hover,
    &:focus {
        box-shadow: 0 0 20px #0003;
    }
`;

const CardFill = styled.div.attrs({
    height: props => props.height || '100%',
})`
    position: relative;
    width: 100%;
    height: 0;
    margin-bottom: 10px;
    padding-bottom: ${props => props.height};
    background-color: ${props => props.color};
    border-radius: var(--sg-border-radius);
`;

const CardTitle = styled.h3`
    margin-bottom: 10px;
    font-family: var(--sg-font-family);
    font-size: 16px;
    letter-spacing: .75px;
    font-weight: 700;
`;

const CardSubtitle = styled.h4`
    display: inline-block;
    margin-top: 0;
    margin-bottom: 0;
    font-family: var(--sg-font-family);
    font-size: 14px;
    font-weight: normal;
`;

const CardLabel = CardSubtitle.extend`
    display: block;
    margin-top: 10px;

    display: ${props => props.isVariable != false ? 'block' : 'none' };

    span {
        padding: 5px 10px;
        background-color: var(--sg-background-color);
        border-radius: var(--sg-border-radius);
        line-height: 2;
    }
`;