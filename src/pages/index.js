import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components';

import data from '../data/settings';

import SectionTitle from '../components/section-title';
import Section from '../components/section';
import Intro from '../components/intro';

const IndexPage = () => (
  <div>
    <Intro title="Bryant Park Pattern Library" version="v1.0" url="https://somethingdigital.com" />
    <Section title="Colors" type="colors" />
    <Section title="Typography" type="typography" />
    <Section title="Buttons &amp; Links" type="buttons" />
    <Section title="Icons" type="icons" />
    <Section title="Favicon" type="favicon" />
    <Section title="Forms" type="forms" />
    <Section title="Promobar" type="block" />
    <Section title="Breadcrumbs" type="block" />
    <Section title="Pagination" type="block" />
    <Section title="Accordions" type="block" />
    <Section title="Alerts" type="block" />
    <Section title="Image Placeholders" />
  </div>
)

export default IndexPage