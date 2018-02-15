import React from 'react'
import styled from 'styled-components';

const Button = props => (
    <ButtonStyle>{props.children}</ButtonStyle>
)

export default Button

/*
    Styles
*/
const ButtonStyle = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    /*width: ${props => props.fullWidth ? '100%' : 'auto'};*/
    width: 100%;
    padding: 10px 25px;
    color: var(--sg-text-color);
    background-color: white;
    border: 0;
    /* border-radius: 25px; */
    box-shadow: 0 0 20px #0000001a;
    transition: transform .2s ease-out;
    text-transform: uppercase;
    font-size: 14px;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    font-weight: bold;

    &:hover,
    &:focus {
        box-shadow: 0 0 20px #0003;
        border: 0;
    }
`;