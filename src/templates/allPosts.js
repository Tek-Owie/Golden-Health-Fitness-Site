import React from "react"
import {graphql} from "gatsby"
import {
    Container,
    Content,
    ContentCard,
    FeatureImage,
    Pagination,
} from "../components"
import {H1, P} from "../elements"
import SEO from "../components/seo"

const allPosts = ({pageContext, data}) => {
    const {currentPage, numPages} = pageContext
    const isFirst = currentPage === 1
    const isLast = currentPage === numPages
    const prevPage = currentPage - 1 === 1 ? "/" : `/${currentPage - 1}`
    const nextPage = `/${currentPage + 1}`

    const posts = data.allMdx.edges

    return (
        <Container>
            <SEO title={data.site.siteMetadata.title}/>
            <FeatureImage />
            <Content>
                <H1 textAlign="center" margin="0 0 1rem 0">
                    {data.site.siteMetadata.title}
                </H1>
                <P color="dark2" textAlign="center" style={{fontStyle: 'italic',
                    fontSize: '0.875rem'}}>
                {data.site.siteMetadata.description}
                </P>
                {posts.map(post => (
                    <ContentCard 
                        key={post.node.frontmatter.slug}
                        date={post.node.frontmatter.date}
                        title={post.node.frontmatter.title}
                        excerpt={post.node.excerpt}
                        slug={post.node.frontmatter.slug}
                        readingTime={post.node.fields.readingTime.text}
                    />
                ))}
            </Content>
            <Pagination 
                isFirst={isFirst}
                isLast={isLast}
                prevPage={prevPage}
                nextPage={nextPage}
            />
        </Container>
    )
}

export default allPosts

export const pageQuery = graphql`
    query AllPostsQuery($skip: Int!, $limit: Int!) {
        allMdx(sort: {fields: frontmatter___date, order: DESC}, skip: $skip, limit: $limit) {
            edges {
              node {
                excerpt(pruneLength: 50, truncate: true)
                frontmatter {
                  slug
                  title
                  date(formatString: "MMMM DD, YYYY")
                }
                fields {
                    readingTime {
                        text
                    }
                }
              }
            }
        }
        site {
            siteMetadata {
                description
                title
            }
        }
    }
`
