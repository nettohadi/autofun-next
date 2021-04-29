import React from 'react';
import SideBar from "./SideBar";

type Props = {
    children: React.ReactNode
};

export default function WithSideBar({children}: Props) {
    return (
        <div className="flex flex-row" style={{minHeight:"calc(100vh - 20px)"}}>
            <div className="w-1/5 flex flex-row">
                <SideBar/>
            </div>
            <div className="flex-1">
                {children}
            </div>
        </div>
    );
};