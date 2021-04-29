import React from 'react';
import {UserContext} from "./Layout";
import {NO_IMAGE} from "../../helpers/consts";

type Props = {};

const Menu: React.FC = (props: Props) => {
    const {user} = React.useContext(UserContext);
    return (
        <div className="h-full w-auto float-right inline">
            <ul className="h-full inline-flex gap-3">
                <li className="text-lg leading-10">Beranda</li>
                <li className="text-lg leading-10">Berita</li>
                <li className="text-lg leading-10">Mobil</li>
                <li className="text-lg leading-10 w-11 h-10 relative">
                    <img className="w-full h-full rounded-full border-gray-400 border"
                         src={user?.image || NO_IMAGE} alt=""/>
                    <div className="absolute top-1/2 right-1/2 font-normal
                    text-gray-600 bg-white border border-gray-400 shadow py-2 text-left px-7 overflow-hidden">
                        <ul className="" style={{fontSize:15}}>
                            <li>Profile</li>
                            <li>Manage</li>
                            <li>Settings</li>
                        </ul>
                    </div>
                </li>
            </ul>
        </div>
    );
};

export default Menu;