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

const Container = styled.section`
    height: 100vh;
    padding-top: 20px;
    padding-bottom: 20px;
`;

const Content = styled.div`
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
    background-color: var(--backgroundColor);
`;