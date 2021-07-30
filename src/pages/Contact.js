import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import { Footer, Navs, Post } from "../components"
import { ContainerWrapper, H1, P } from "../elements"
import SEO from "../components/seo"

const contactUs = ({data}) => {
    const featureImage = data.imageSharp.fluid

    return (
        <ContainerWrapper>
            <SEO title="Contact Us" description="You can contact Golden Health and Fitness on the various social media platfroms"/>
            <Navs/>
            <Post>
                <H1>GET IN TOUCH</H1>
                <Img fluid={featureImage}/>
                <P>Do you have questions, comment and contributions?<br/>Feel free to reach us on our social media handles: IG; FB; TW; WH<br/>Give us a shout-out and we'll be glad to respond to you ASAP!!</P>
            </Post>
            <Footer/>
        </ContainerWrapper>
    )
}
export default contactUs

export const contactUsQuery = graphql`
    query contactUsQuery {
        imageSharp(fluid: {originalName: {eq: "contactUs.jpg"}}) {
            fluid (maxWidth: 1000, quality: 50) {
                ...GatsbyImageSharpFluid
            }
        }
    }
`