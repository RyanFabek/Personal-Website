/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: "Ryan Fabek",
    titleTemplate: "%s",
    description: "",
    url: "https://ryanfabek.ca",
    image: "./Logo.svg",
    linkedinUsername: "ryan-fabek" 
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `quicksand\:400`,
          `source sans pro\:300,400,400i,700` // you can also specify font weights and styles
        ],
        display: 'swap'
      }
    },{
      
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          "GA-TRACKING_ID", // Google Analytics / GA
          "AW-CONVERSION_ID", // Google Ads / Adwords / AW
        ],
      },

    },{

      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Ryan Fabek - Future Engineer and Innovator`,
        short_name: `Ryan Fabek`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#a2466c`,
        display: `standalone`,
        icon: "src/images/Logo.svg",

      }


    }, `gatsby-plugin-scroll-reveal`, `gatsby-plugin-react-helmet`, `gatsby-plugin-fontawesome-css`, `gatsby-plugin-sitemap`,
  ]
}