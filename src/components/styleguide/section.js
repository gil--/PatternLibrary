import React from 'react'
import styled from 'styled-components';
import Sticky from 'react-stickynode';

import SectionTitle from '../styleguide/section-title';
import Colors from '../sections/colors';
import Icons from '../sections/icons';
import Block from '../sections/block';
import Typography from '../sections/typography';

const getSection = (type, data) => {
    if (type === 'colors') {
        return <Colors data={data} />;
    } else if (type === 'typography') {
        return <Typography data={data} />;
    } else if (type === 'buttons') {
        return 'buttons component here';
    } else if (type === 'icons') {
        return <Icons data={data} />;
    } else if (type === 'block') {
        return <Block data={data} />;
    }
}

const getSectionID = (title) => {
    return title.replace(' ', '-');
}

const Section = props => (
    <Container id={getSectionID(props.title)}>
        { props.title ?
            <Sticky enabled={false} top={0}>
                <SectionTitle title={props.title} />
            </Sticky>
        : '' }
        <Content fullbleed={props.fullbleed}>
            {getSection(props.type, props.data)}
            {props.children}
        </Content>
    </Container>
)

export default Section;

/*
    Styles
*/
const Container = styled.section`
    min-height: 50vh;
`;

const Content = styled.div`
    ${props => !props.fullbleed && `
        max-width: 1060px;
        margin: 0 auto;
    `}
    padding: 20px;
    ${props => props.fullbleed && `
        padding-left: 0;
        padding-right: 0;
    `}
`;