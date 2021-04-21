import {ApolloProvider} from '@apollo/client/react';
import {client} from "../helpers/apollo";
import '../styles/globals.css'
import Layout from "../components/Layout";

function MyApp({Component, pageProps}) {
    return (
        <Layout>
            <ApolloProvider client={client}>
                <Component {...pageProps} />
            </ApolloProvider>
        </Layout>
    );
}

export default MyApp
