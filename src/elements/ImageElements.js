import styled from "styled-components"

export const FeatureImageWrapper = styled.div`
    grid-column: 3 / span 10;
    grid-row: 2 / 4;
    overflow: hidden;
    position: relative;
    width: 80%;
    margin: 0 auto;

    @media ${props => props.theme.breakpoints.tablet} {
        grid-column: 2 / span 6;
    }

    @media ${props => props.theme.breakpoints.mobile} {
        // height: 10rem;
        // width: auto;
        // object-fit: cover;
    }
`