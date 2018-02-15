import React from 'react'
import styled from 'styled-components';

const GroupTitle = props => (
    <Title>{props.title}</Title>
)

export default GroupTitle

/*
    Styles
*/
const Title = styled.h3`
    margin: 40px 0 30px;
    padding-top: 10px;
    padding-bottom: 10px;
    text-align: left;
    font-size: 18px;
    text-transform: uppercase;
    border-top: 5px solid var(--sg-background-color);
    font-family: var(--sg-font-family);
    font-weight: 700;
`;