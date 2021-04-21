import React from 'react';
import Header from "./Header";
import Footer from "./Footer";
import Head from "next/head";

type Props = {
    children: React.ReactNode
};

export default function Layout({children}: Props):JSX.Element {
    return (
        <div>
            <Head>
                <link rel="shortcut icon"  href="/images/favicon-autofun.png"></link>
            </Head>
            <Header/>
            <main className='main-content'>
                {children}
            </main>
            <Footer cars={[]}/>
        </div>
    );
};