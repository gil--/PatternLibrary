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
    font-size: 28px;
`;