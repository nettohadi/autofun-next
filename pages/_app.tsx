import {ApolloProvider} from '@apollo/client/react';
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;
import {client} from "../helpers/apollo";
import '../styles/globals.css'
import Layout from "../components/shared/Layout";

function MyApp({Component, pageProps}) {
    console.log('rerender _app');
    return (
        <ApolloProvider client={client}>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </ApolloProvider>
    );
}

export default MyApp
