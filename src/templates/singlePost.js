import React from "react"
import Img from "gatsby-image"
import {graphql} from "gatsby"
import {MDXRenderer} from "gatsby-plugin-mdx"
import {H1, P} from "../elements"
import { 
  Container,
  Post,
  } from "../components"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarAlt, faEdit, faStopwatch } from '@fortawesome/free-solid-svg-icons'
import SEO from "../components/seo"
import ShareButtons from "../components/ShareButtons"

const singlePost = ({data, location}) => {
    const featureImage = data.mdx.frontmatter.featureImage.childImageSharp.fluid
    const author =data.mdx.frontmatter.author
    const datePublished = data.mdx.frontmatter.date
    const siteTitle = data.mdx.frontmatter.title
    const postTitle = `Read ${data.mdx.frontmatter.title} `;
    // const tags = props.data.mdx.frontmatter.tags;
    const url = location.href
    const image = data.mdx.frontmatter.featureImage
      ? data.mdx.frontmatter.featureImage.childImageSharp.resize
      : null
    return (
      <>
          <Container location={location} >
              <SEO title={siteTitle}
              description={data.mdx.excerpt}
              pathname={location.pathname}
              image={image}/>
              <Post>
                  <H1 margin="0 0 2rem 0">{data.mdx.frontmatter.title}</H1>
                  <Img alt="Credit: Unsplash" fluid={featureImage} />
                  <P className="others" style={{fontSize: "0.7rem"}}>
                  <FontAwesomeIcon icon={faCalendarAlt} size="lg"/>  {datePublished}
                  </P>
                  <P className="others"><FontAwesomeIcon icon={faEdit} size="lg"/>  {author}</P>
                  <P className="others" style={{fontSize: "0.7rem"}}>
                  <FontAwesomeIcon icon={faStopwatch} size="2x" /> {data.mdx.fields.readingTime.text}
                  </P>
                  <ShareButtons title={postTitle} url={url} />
                  <MDXRenderer>{data.mdx.body}</MDXRenderer>
              </Post>
          </Container>
      </>
    )
}

export default singlePost

export const pageQuery = graphql`
    query SinglePostQuery( $id: String!) {
      mdx (id: { eq: $id }) {
            body
            excerpt(pruneLength: 160)
            frontmatter {
              date (formatString: "dddd, DD MMM YYYY")
              slug
              title
              author
              featureImage {
                childImageSharp {
                  fluid (maxWidth: 1000, quality: 50) {
                    ...GatsbyImageSharpFluid
                    
                  }
                  resize(width: 1200) {
                    height
                    width
                    src
                  }
                }
              }
            }
            fields {
              readingTime {
                text
              }
            }
        }
        site {
          siteMetadata {
              description
              title
              domain: siteUrl
          }
        }
  }
`