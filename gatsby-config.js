module.exports = {
  siteMetadata: {
    title: `Ronnlid Websites`,
    description: "Experience is the ultimate source of value",
    author: `David Rönnlid`,
  },
  plugins: [
    "gatsby-plugin-styled-components",
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    pathPrefix: "/gh",
    {
      resolve: "gatsby-transformer-remark",
      options: {
        excerpt_separator: `<!-- end -->`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    // {
    //   resolve: `gatsby-plugin-manifest`,
    //   options: {
    //     name: `ronnlid-websites`,
    //     short_name: `rw`,
    //     start_url: `/`,
    //     background_color: `#e50914`,
    //     theme_color: `#4285f4`,
    //     display: `minimal-ui`,
    //     icon: `src/images/newLogov3.jpg`, // This path is relative to the root of the site.
    //   },
    // },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // 'gatsby-plugin-offline',
  ],
}
