import {ChakraProvider, extendTheme } from "@chakra-ui/react"
import * as React from "react"
import ReactDOM from "react-dom"
import {App} from "./App"
import {Provider} from "react-redux";
import store from "./redux/store";

const theme = extendTheme({
    components: {
        Button: {
            // 1. We can update the base styles
            baseStyle: {
                _focus: {
                    borderColor: "black",
                }, // Normally, it is "semibold"
            },
        }
    }
})

ReactDOM.render(
    <Provider store={store}>
        <ChakraProvider theme={theme}>
            <App/>
        </ChakraProvider>
    </Provider>,
    document.getElementById("root"),
)
