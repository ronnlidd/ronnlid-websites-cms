require("dotenv").config()

module.exports = {
  siteMetadata: {
    title: `Ronnlid Websites`,
    description: "Experience is the ultimate source of value",
    author: `David Rönnlid`,
    siteUrl: "https://ronnlidwebsites.com",
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-netlify-cms`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: "gatsby-source-stripe",
      options: {
        objects: ["Product", "Sku"],
        secretKey: process.env.STRIPE_SECRET_KEY,
        downloadFiles: true,
      },
    },
    {
      resolve: `gatsby-plugin-stripe`,
      options: {
        async: true,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: "gatsby-transformer-remark",
      options: {
        excerpt_separator: `<!-- end -->`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`, //Remove because of duplication? ^^
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Ronnlid Websites`,
        short_name: `RW`,
        start_url: `/`,
        background_color: `#e50914`,
        theme_color: `#4285f4`,
        display: `minimal-ui`,
        icon: `src/images/newLogov3.png`, // This path is relative to the root of the site.
      },
    },
    "gatsby-plugin-offline",
  ],
}
