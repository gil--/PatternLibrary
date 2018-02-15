import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import styled, { injectGlobal } from 'styled-components';
import Favicon from 'react-favicon';

import data from '../data/settings';

//import './index.css'

const Stylesheets = () => {
  const stylesheets = [];

  data.resources.map(resource => {
    if (resource.type == 'stylesheet') {
      stylesheets.push({ "rel": "stylesheet", "href": resource.src });
    }
  });

  return stylesheets;
};

const Header = () => (
  <div
    style={{
      background: 'rebeccapurple',
      marginBottom: '1.45rem',
    }}
  >
    <div
      style={{
        padding: '1.45rem 1.0875rem',
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          Gatsby
        </Link>
      </h1>
    </div>
  </div>
)

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title={data.title}
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
      link={ Stylesheets() }
    />
    <Favicon url={data.favicon} />
    <div
      style={{
        padding: '0 0 1.45rem',
        paddingTop: 0,
      }}
    >
      {children()}
    </div>
  </div>
)

injectGlobal`
  :root {
    --backgroundColor: #cccccc;
    --text-color: #141414;
    --sg-font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;
    --sg-border-radius: 6px;
    --sg-background-color: #eee;
    --sg-border-color: #e7e7e7;
  }
`;

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
