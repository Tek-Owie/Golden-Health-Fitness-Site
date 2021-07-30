import React from "react"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import { FeatureImageWrapper } from "../elements"

export const FeatureImage = ({fluid}) => {
    
    const data = useStaticQuery (graphql`
        query {
            imageSharp(fluid: {originalName: {eq: "newFeatureImage.jpg"}}) {
                fluid (maxWidth: 1000, quality: 60) {
                    ...GatsbyImageSharpFluid
                      
                }
            }
        }
    `)
    
    return (
        <FeatureImageWrapper>
            <Img  fluid={fluid ? fluid : data.imageSharp.fluid}/>
        </FeatureImageWrapper>
    )
}