require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    url: "https://www.harmonypay.one", // No trailing slash allowed!
    siteUrl: "https://www.harmonypay.one", // No trailing slash allowed!
    title: "HarmonyPay",
    titleTemplate: "%s · Cryptocurrency Payment Gateway",
    description: "Cryptocurrency payment gateway for WooCommerce and Easy Digital Downloads. Receive coins directly into the wallet of your choice.",
    image: "/images/logo_harmonypay.svg", // Path to your image you placed in the 'static' folder
    twitterUsername: "@swapsvision",
  },
  plugins: [
    {
      resolve: "gatsby-source-contentful",
      options: {
        accessToken: process.env.GATSBY_CF_ACCESS_TOKEN,
        spaceId: process.env.GATSBY_CF_SPACE_ID,
      },
    },
    `gatsby-plugin-postcss`,
    "gatsby-plugin-image",
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "11331133",
      },
    },
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `HarmonyPay Payment Gateway`,
        short_name: `HarmonyPay`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#a2466c`,
        display: `standalone`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },
    "gatsby-transformer-remark",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
  ],
};
