import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import { Footer, Navs, Post} from "../components"
import { ContainerWrapper, H1, P} from "../elements"
import SEO from "../components/seo"

const aboutPage = ({data}) => {
    const featureImage = data.imageSharp.fluid

    return (
        <ContainerWrapper>
            <SEO title="About Us" description="Find out what Golden Health and Fitness does, how it started and why should patronize its services"/>
            <Navs/>
            <Post>
                <H1>what is golden health & fitness?</H1>
                <Img fluid={featureImage}/>
                <P>Golden Health & Fitness is an innovative brand that is concerned with the health and wellness of her society, 
                    this brand's sole aim is to achieve a healthy, fit body for all.
                </P>
                <P>With the nature of hardship and activities in the nation, 
                    Golden Health & Fitness is a platform that is concerned with providing quality orientation on 
                    the importance of exercise and the manner to be fit
                </P>
                <P>We have highly skilled professional trainers for 
                    the purpose of educating you and to carry out routines that will aid in 
                    giving a healthy body to all classes in the society.
                 </P>
            </Post>
            <Footer/>
        </ContainerWrapper>
    )
}

export default aboutPage

export const aboutPageQuery = graphql`
    query AboutPageQuery {
        imageSharp(fluid: {originalName: {eq: "aboutUs.jpg"}}) {
            fluid (maxWidth: 1000, quality: 50) {
                ...GatsbyImageSharpFluid
            }
        }
    }
`
