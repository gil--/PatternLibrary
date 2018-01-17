import React from 'react'
import styled from 'styled-components';

const Intro = props => (
    <Container>
        <Content>
            <h1>{props.title}</h1>
            <div>{props.version}</div>
            <a href={props.url} target="_blank">View on Github</a>
        </Content>
    </Container>
)

export default Intro;

/*
    Styles
*/
const Container = styled.section`
    height: 100vh;
    padding-top: 20px;
    padding-bottom: 20px;
`;

const Content = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    height: 100%;
    margin: 0 auto;
    padding-top: 20px;
    padding-bottom: 20px;
    text-align: center;
    /* background-color: var(--backgroundColor); */

    &::before {
        content: '';
        position: absolute;
        width: 50%;
        height: 50%;
        background: #e5e76c;
        right: 10%;
        top: 25%;
        z-index: -1;
        pointer-events: none;
        outline-offset: -40px;
    }

    &::after {
        content: '';
        position: absolute;
        width: 50%;
        height: 100%;
        left: 0;
        top: 0;
        z-index: -1;
        pointer-events: none;
        outline: 10px solid #f06212;
        outline-offset: -40px;
    }

    h1 {
        mix-blend-mode: difference;
        color: #ff761e;
    }
`;