import React from 'react'
import styled from 'styled-components';

const SectionTitle = props => (
    <Title>
        <h2>{props.title}</h2>
    </Title>
)

export default SectionTitle

const Title = styled.div`
    position: sticky;
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100px;
    width: 100%;
    text-align: center;
    text-transform: uppercase;
    background-color: var(--backgroundColor);

    h2 {
        margin: 0;
    }
`;