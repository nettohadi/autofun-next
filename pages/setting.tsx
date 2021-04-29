import React, {useEffect} from 'react';
import WithSideBar from "../components/shared/WithSideBar";

type Props = {
    showSidebar: Function
};

export default function setting({showSidebar}: Props) {

    return (
        <WithSideBar>
            <div className="text-xl font-bold p-8 pt-24">
                Setting
            </div>
        </WithSideBar>
    );
};