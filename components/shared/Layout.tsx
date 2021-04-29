import React, {useEffect, useState} from 'react';
import Header from "./Header";
import Footer from "./Footer";
import Head from "next/head";
import SideBar from "./SideBar";
import {CarType, UserType} from "../../types";
import userQuery from "../../helpers/queries/userQuery";
import {gql, useQuery} from "@apollo/client";
import {fetchUsingGql} from "../../helpers/apollo";
import carQuery from "../../helpers/queries/carQuery";
import * as cookie from 'cookie';

type Props = {
    children: React.ReactNode,
};

type UserContextType = {
    user: UserType,
    setUser: Function
}

type AuthUserData = {
    authUser: UserType;
}

type UserData = {
    authUser: UserType;
}

export const UserContext = React.createContext<UserContextType>({user:{}, setUser:null});



export default function Layout({children}: Props):JSX.Element {
    const [sidebarIsVisible, showSidebar] = useState(false);

    const userGraph = useQuery<UserData>(gql`${userQuery.getLoggedInUser}`);
    const authUser = userGraph.data?.authUser || {};

    const [user, setUser] = useState<UserType>({});

    useEffect(() => {
        console.log('got user data');setUser(authUser)}, [userGraph.data])

    const childrenWithExtraProp = React.Children.map(children, child => {
        if (React.isValidElement(child)) {
            return React.cloneElement(child, {showSidebar});
        }
    });

    console.log('rerender layout');

    return (
        <UserContext.Provider value={{user, setUser}}>
            <Head>
                <link rel="shortcut icon"  href="/images/favicon-autofun.png"></link>
            </Head>
            <Header/>
            <main className='main-content'>
                {children}
            </main>
            <Footer cars={[]}/>
        </UserContext.Provider>
    );
};