import { ChakraProvider, Flex } from "@chakra-ui/react";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";
import AppRoutes from "./AppRoutes";
import theme from "./utils/theme";
import { BrowserRouter } from "react-router-dom";
import AuthProvider from "./utils/AuthProvider";
import type React from "react";

const queryClient = new QueryClient({});

export const App: React.FC = () => {
    return (
        <BrowserRouter>
            {/* <AuthProvider> */}
            <ChakraProvider theme={theme}>
                <Flex align="stretch" wrap={"wrap"}>
                    <Header />
                    <Main>
                        <QueryClientProvider client={queryClient}>
                            {process.env.NODE_ENV === "development" && (
                                <ReactQueryDevtools initialIsOpen={false} />
                            )}
                            <AppRoutes />
                        </QueryClientProvider>
                    </Main>
                    <Footer />
                </Flex>
            </ChakraProvider>
            {/* </AuthProvider> */}
        </BrowserRouter>
    );
};
