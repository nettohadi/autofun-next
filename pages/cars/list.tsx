import React, {useEffect} from 'react';
import WithSideBar from "../../components/shared/WithSideBar";

type Props = {
    showSidebar: any
};

export default function list({showSidebar}: Props) {

    return (
        <WithSideBar>
            <div className="text-xl font-bold p-8 pt-24">
                List Menu
            </div>
        </WithSideBar>
    );
};