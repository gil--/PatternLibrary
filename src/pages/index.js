import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components';

import data from '../data/settings';

import SectionTitle from '../components/section-title';
import Section from '../components/section';
import Intro from '../components/intro';

const getSections = () => {
  return data.sections.map((section) =>
    <Section title={section.title} type={section.type} data={section.groups} />
  );
}

const IndexPage = () => (
  <div>
    <Intro title={data.title} version={data.version} url={data.url} />
    {getSections()}
    <Section title="Image Placeholders" data={data} />
  </div>
)

export default IndexPage