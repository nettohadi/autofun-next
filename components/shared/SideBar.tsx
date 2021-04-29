import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCarSide, faNewspaper, faUser, faCog } from '@fortawesome/free-solid-svg-icons'
import {useRouter} from "next/router";


type Props = {};

export default function SideBar(props: Props) {
    const router = useRouter();
    const setSelectedMenu = path =>  router.pathname == path ? styles.selectedMenu : {};
    return (
        <div className="border-r-2 flex flex-col flex-1" style={{paddingTop:84}}>
            <div className={classes.sideBarItem}
                 style={setSelectedMenu('/cars/list')}
                 onClick={() => router.push('/cars/list')}
            >
                <FontAwesomeIcon className="mr-2" icon={faCarSide}></FontAwesomeIcon>
                Manage Cars
            </div>
            <div className={classes.sideBarItem}
                 style={setSelectedMenu('/contents/list')}
                 onClick={() => router.push('/contents/list')}
            >
                <FontAwesomeIcon className="mr-2" icon={faNewspaper}></FontAwesomeIcon>
                Manage Content
            </div>
            <div className={classes.sideBarItem}
                 style={setSelectedMenu('/profile')}
                 onClick={() => router.push('/profile')}
            >
                <FontAwesomeIcon className="mr-2" icon={faUser}></FontAwesomeIcon>
                Profile
            </div>
            <div className={classes.sideBarItem}
                 style={setSelectedMenu('/setting')}
                 onClick={() => router.push('/setting')}
            >
                <FontAwesomeIcon className="mr-2" icon={faCog}></FontAwesomeIcon>
                Setting
            </div>
        </div>
    );
};

const classes = {
    sideBarItem: "px-5 py-4 border-b-2 font-bold cursor-pointer"
}
const styles = {
    selectedMenu: {
        backgroundColor:"black",
        color: "white"
    }
}