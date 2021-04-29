import React, {useEffect} from 'react';
import WithSideBar from "../components/shared/WithSideBar";

type Props = {
    showSidebar: Function
};

export default function profile({showSidebar}: Props) {

    return (
        <WithSideBar>
            <div className="text-xl font-bold p-8 pt-24">
                Profile
            </div>
        </WithSideBar>
    );
};