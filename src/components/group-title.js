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
    margin-top: 40px;
    margin-bottom: 30px;
    padding-bottom: 10px;
    text-align: left;
    font-size: 18px;
    text-transform: uppercase;
    border-bottom: 2px solid #f5f2f0;
`;