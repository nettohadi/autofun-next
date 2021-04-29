import React, {useEffect} from 'react';
import WithSideBar from "../../components/shared/WithSideBar";

type Props = {
    showSidebar: Function
};

export default function list({showSidebar}: Props) {

    return (
        <WithSideBar>
            <div className="p-8 pt-24">
                Content List
            </div>
        </WithSideBar>
    );
};