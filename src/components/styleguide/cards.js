import React from 'react'
import styled from 'styled-components';

const Cards = props => (
    <CardList>
        {props.children}
    </CardList>
)

export default Cards


/*
    Styles
*/

const CardList = styled.ul`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    grid-gap: 20px;
    margin: 0;
    padding-left: 0;
    list-style: none;
`;