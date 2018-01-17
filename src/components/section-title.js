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
    margin-top: 20px;
    text-align: center;
    text-transform: uppercase;
    /* background-color: var(--backgroundColor); */
    z-index: 5;

    h2 {
        position: relative;
        margin: 0;

        &:after {
            position: absolute;
            bottom: 0;
            left: 50%;
            transform: translate(-50%, 10px);
            width: 75%;
            height: 3px;
            background-color: var(--backgroundColor);
            content: '';
        }
    }
`;