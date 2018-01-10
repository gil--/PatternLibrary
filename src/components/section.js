import React from 'react'
import styled from 'styled-components';
import Sticky from 'react-stickynode';

import SectionTitle from './section-title';

const getSection = (type, data) => {
    if (type === 'colors') {
        return 'color component here';
    } else if (type === 'typography') {
        return 'typography component here';
    } else if (type === 'buttons') {
        return 'buttons component here';
    } else if (type === 'icons') {
        return 'icons component here';
    } else if (type === 'favicon') {
        return 'favicon component here';
    } else if (type === 'forms') {
        return 'typography component here';
    } else {
        return 'generic block component here';
    }
}

const Section = props => (
    <Container>
        { props.title ?
            <Sticky enabled={true} top={0}>
                <SectionTitle title={props.title} />
            </Sticky>
        : '' }
        <Content>
            {getSection(props.type, props.data)}
            {props.children}
        </Content>
    </Container>
)

export default Section;

const Container = styled.section`
    min-height: 100vh;
`;

const Content = styled.div`
    max-width: 960px;
    margin: 0 auto;
    padding-top: 20px;
    padding-bottom: 20px;
    text-align: center;
`;