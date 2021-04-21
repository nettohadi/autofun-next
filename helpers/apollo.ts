import {ApolloClient, createHttpLink, InMemoryCache} from '@apollo/client';
import { gql } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';


const httpLink = createHttpLink({
    uri: 'https://backend.hadi-syahbal.com/graphql',
});

const authLink = setContext((_, { headers }) => {
    // get the authentication token from local storage if it exists
    const token = typeof localStorage !== 'undefined' ? localStorage.getItem('apollo_token') || '' : '';
    // return the headers to the context so httpLink can read them
    return {
        headers: {
            ...headers,
            authorization: token ? `Bearer ${token}` : "",
        }
    }
});

export const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache()
});


export  async function fetchUsingGql(query, variables={}){
    return client.query({
        query: gql`${query}`, variables
    });

}



