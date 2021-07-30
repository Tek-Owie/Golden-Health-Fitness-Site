import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import { Footer, Navs, Post} from "../components"
import { ContainerWrapper, H1, P} from "../elements"
import SEO from "../components/seo"

const servicePage = ({data}) => {
    const featureImage = data.imageSharp.fluid

    return (
        <ContainerWrapper>
            <SEO title="Services" description="Find out what Golden Health and Fitness does, how it started and why should patronize its services"/>
            <Navs/>
            <Post>
                <H1>what do we offer?</H1>
                <Img fluid={featureImage}/>
                <P>We offer a range of diverse services across beauty, sports and health categories. These are: 
                <ul>
                    <li>Fitness training</li>
                    <li>Diet coaching</li>
                    <li>Massage</li>
                    <li>Pedicure & Manicure</li>
                </ul>
                </P>
            </Post>
            <Footer/>
        </ContainerWrapper>
    )
}

export default servicePage

export const servicePageQuery = graphql`
    query ServicePageQuery {
        imageSharp(fluid: {originalName: {eq: "service.jpg"}}) {
            fluid (maxWidth: 1000, quality: 50) {
                ...GatsbyImageSharpFluid
            }
        }
    }
`