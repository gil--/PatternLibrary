import React from 'react'
import styled from 'styled-components';

const SectionTitle = props => (
    <Title>
        <h2>{props.title}</h2>
    </Title>
)

export default SectionTitle

/*
    Styles
*/
const Title = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100px;
    width: 100%;
    text-align: center;
    text-transform: uppercase;
    background-color: var(--backgroundColor);
    z-index: 5;

    h2 {
        margin: 0;
    }
`;