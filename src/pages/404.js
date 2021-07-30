import React from "react"
import {graphql} from "gatsby"
import {Container, Content, FeatureImage} from "../components"
import {H1} from "../elements"
import SEO from "../components/seo"

const notFound = ({data}) => {
  const featureImage = data.imageSharp.fluid

  return (
    <Container>
    <SEO title="404: Not found" />
      <FeatureImage fluid={featureImage}/>
      <Content>
      <H1 textAlign="center" margin="0 0 1rem 0">404: Not Found</H1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      </Content>
    </Container>
  )
  
}

export default notFound

export const notFoundQuery = graphql`
  query NotFoundQuery {
    imageSharp (fluid: {originalName: {eq: "404.jpg"}}) {
      fluid (maxWidth: 1000, quality: 50) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`
