import React from 'react'
import styled from 'styled-components';

const Intro = props => (
    <Container>
        <Content>
            <h1>{props.title}</h1>
            {/* <div>{props.version}</div> */}
            <CTA href={props.url} target="_blank">View Staging Site</CTA>
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
    box-sizing: border-box;
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
    box-sizing: border-box;
    /* background-color: var(--backgroundColor); */

    &::before {
        content: '';
        position: absolute;
        width: 50%;
        height: 50%;
        background: var(--color-secondary);
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
        outline: 10px solid var(--color-primary);
        outline-offset: -40px;
    }

    @media screen and (max-width: 768px) {
        &::after,
        &::before {
            /* display: none; */
        }
    }

    h1 {
        /* mix-blend-mode: difference; */
        color: black;
        font-weight: 700;

        @media screen and (min-width: 769px) {
            font-size: 46px;
        }
    }
`;

const CTA = styled.a`
    margin-top: 10px;
    padding: 10px 25px;
    font-weight: bold;
    font-size: 18px;
    text-decoration: none;
    color: black;
    background: white;
    border-radius: 30px;

    @media screen and (min-width: 768px) {
        margin-left: 200px;
    }

    &:hover {
        text-decoration: none;
        color: var(--color-primary);
    }

    &:visited {
        color: inherit;
    }
`