module.exports = {
  siteMetadata: {
    title: `Ronald Langeveld`,
    siteUrl: `https://www.ronaldlangeveld.com`,
    description: `Indie Software Developer, Ronald Langeveld, working on development projects for local and international clients. From South Africa and travels around Asia whilst working remotely.`,
    image: `src/images/bigimg2.jpg`,
    twitterUsername: `@ronaldlangeveld`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog`,
        path: `${__dirname}/src/posts`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Ronald Langeveld`,
        short_name: `Ronald`,
        start_url: `/`,
        background_color: `#0a9dff`,
        theme_color: `#0a9dff`,
        display: `minimal-ui`,
        icon: `src/images/profilepic2.jpg`
       // This path is relative to the root of the site.   icon: `src/images/gatsby-icon.png`,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
    `gatsby-plugin-sitemap`,
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data/`
      }
    }
  ],
}
