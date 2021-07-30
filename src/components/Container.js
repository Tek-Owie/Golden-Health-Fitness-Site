import React from "react";
import {ContainerWrapper} from "../elements";
import {Navs, Footer} from "../components"

export const Container = ({children}) => {
    return <ContainerWrapper>
    <Navs/>
        {children}
        <Footer></Footer>
    </ContainerWrapper>
}