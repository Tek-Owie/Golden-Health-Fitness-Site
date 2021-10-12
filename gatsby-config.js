module.exports = {
  siteMetadata: {
    title: `Golden Health & Fitness Blog`,
    description: `Kickstart your journey to fitness and physical pride with this simple, interactive blog.`,
    keywords: `"fitness trainer", "fitness blog"`,
    siteUrl: `localhost:8000`,
    author: `Lily Gold`,
    social: {
      instagram: `li_goldie`,
    },
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // The property ID; the tracking code won't be generated without it; I need to host the site first
        trackingId: "G-RX04VTJ15B",
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: true,
        // Setting this parameter is optional
        anonymize: true,
        // Setting this parameter is also optional
        respectDNT: true,
        // Avoids sending pageview hits from custom paths
        exclude: ["/preview/**", "/do-not-track/me/too/"],
        // Delays sending pageview hits on route update (in milliseconds)
        pageTransitionDelay: 0,
        // Enables Google Optimize using your container Id
        optimizeId: "YOUR_GOOGLE_OPTIMIZE_TRACKING_ID",
        // Enables Google Optimize Experiment ID
        experimentId: "YOUR_GOOGLE_EXPERIMENT_ID",
        // Set Variation ID. 0 for original 1,2,3....
        variationId: "YOUR_GOOGLE_OPTIMIZE_VARIATION_ID",
        // Defers execution of google analytics script after page load
        defer: false,
        // Any additional optional fields
        sampleRate: 5,
        siteSpeedSampleRate: 10,
        cookieDomain: "example.com",
      },
    },
//     {
//       resolve: `gatsby-plugin-netlify-cms`,
//       options: {
//         modulePath: `${__dirname}/src/cms/cms.js`,
//       },
//     },
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
        name: `pages`,
        path: `${__dirname}/src/pages`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/posts`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data`,
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-transformer-yaml`,
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        extensions: ['.md', '.mdx'],
        gatsbyRemarkPlugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 1000,
              showCaptions: true
            }
          }
        ]
      },
    },
    `gatsby-remark-reading-time`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Golden Health & Fitness`,
        short_name: `GHF`,
        start_url: `/`,
        background_color: `hsl(227,2%,12%)`,
        theme_color: `#d4af37`,
        display: `standalone`,
        icon: `src/images/BG Main.png`, // This path is relative to the root of the site.
        cache_busting_mode: `none`, 
      },
    },
    {
      resolve: 'gatsby-plugin-offline',
      options: {
         workboxConfig: {
            globPatterns: ['src/images/BG Main.png']
         },
      },
    },
  ],
  mapping: {
    "MarkdownRemark.frontmatter.author": `AuthorYaml`,
  },
};
