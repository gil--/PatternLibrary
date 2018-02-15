require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`
});

module.exports = {
  siteMetadata: {
    title: `Theme Styleguide`,
  },
  plugins: [`gatsby-plugin-react-helmet`],
  pathPrefix: `/styleguide`,
}
