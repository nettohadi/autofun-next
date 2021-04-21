import SearchBar from "./SearchBar";
import Menu from "./Menu";
import {MutableRefObject, useEffect, useRef, useState} from "react";
import {useRouter} from "next/router";

type Props = {
    alwaysShow?:boolean
};

const Header = ({alwaysShow = false}: Props) => {
    const logo = 'https://www.autofun.co.id/dist/id/images/logo-id.4408ea.svg';
    const headerElement = useRef<HTMLElement>(null);
    const router = useRouter();

    useEffect(() => {
        if(router.route != '/') {
            headerElement.current?.classList.remove('header-hidden');
            return;
        }else{
            headerElement.current?.classList.add('header-hidden');
        }
        const handleScroll = () => {
            if(window.scrollY > 590) {
                headerElement.current?.classList.remove('header-hidden');
            }else{
                headerElement.current?.classList.add('header-hidden');
            }
        };

        window.addEventListener('scroll', handleScroll);
        console.log('attacth listener');

        return () => {
            console.log('remove listener');window.removeEventListener('scroll', handleScroll)}
    })


    console.log('rerender header')

    return (
        <header ref={headerElement} id="header-nav" className={`fixed w-full bg-white z-10 header-nav`}>
            <nav className="p-5 border-b-2" style={{height: 90}}>
                <div className="flex flex-row h-full">
                    <div className="w-1/5 h-full cursor-pointer" style={{minWidth: 200}} onClick={() => router.push('/')}>
                        <img src={logo} className="h-4/5"/>
                    </div>
                    <div className="flex-1 h-full w-3/5"><SearchBar border={"border-yellow-400"}/></div>
                    <div className="flex-1 h-full w-1/5"><Menu/></div>
                </div>
            </nav>
        </header>
    );
};

export default Header;