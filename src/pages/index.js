import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components';

import data from '../data/settings';

import SectionTitle from '../components/styleguide/section-title';
import Section from '../components/styleguide/section';
import Intro from '../components/styleguide/intro';
import SectionNav from '../components/styleguide/section-nav';

const getSections = () => {
  return data.sections.map((section) =>
    <Section title={section.title} type={section.type} data={section.groups} fullbleed={section.fullbleed || false}/>
  );
}

const IndexPage = () => (
  <div>
    <Intro title={data.title} version={data.version} url={data.url} />
    <MainContent>
      <SidebarNav>
        <SectionNav sections={data.sections} />
      </SidebarNav>
      <Sections>
        {getSections()}
        <Section title="Image Placeholders" data={data} />
      </Sections>
    </MainContent>
  </div>
)

export default IndexPage

/*
  Styles
*/
const Sections = styled.div`
    flex: 4;
`;

const SidebarNav = styled.div`
    flex: 1;
    padding-top: 0;
    background-color: var(--sg-background-color);

    @media screen and (max-width: 768px) {
        /* TODO: make mobile variation */
        display: none;
    }
`;

const MainContent = styled.div`
  @media screen and (min-width: 769px) {
    display: flex;
  }
`;