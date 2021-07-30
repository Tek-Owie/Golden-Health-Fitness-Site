import React from "react";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import {MDXProvider} from "@mdx-js/react"
import Theme from "./src/themes/theme";
import {Table} from "./src/components"



const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    body, html {
        height: 100%;
        font-family: SF Mono, Verdana, Roboto;
        background-color: white;
        padding-top: 1.7rem;    ${'' /*Added due to the fixed position of the navbar */}
    }
`

const components = {
    table: Table,
}

export const wrapRootElement = ({ element }) => (
    <MDXProvider components={components}>
        <ThemeProvider theme={Theme}>
            <GlobalStyles />
                {element}
        </ThemeProvider>
    </MDXProvider>
    
)