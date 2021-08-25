import * as React from "react"

import {Container} from "@chakra-ui/react"

import Header from "./components/Header/Header"
import UserBlog from "./components/UserBlog/UserBlog";

export const App = () => {
    return (
        <Container maxW={'container.xl'}>
            <Header isAuth={true}/>
            <UserBlog />
        </Container>
    )
}

