import React from 'react';
import {UserContext} from "./Layout";
import {NO_IMAGE} from "../../helpers/consts";
import UserMenu from "./UserMenu";
import {useClickOutside} from "../../helpers";
import {log} from "util";

type Props = {};

const Menu: React.FC = (props: Props) => {
    const {user} = React.useContext(UserContext);

    const [menuVisibility, setMenuVisibility] = React.useState(false);

    const toggleMenu = () => {
        setMenuVisibility((prevData) => true);
    }

    const closeMenu = () => {
        console.log('close menu');
        setMenuVisibility(false);
    }

    const openMenu = () => {
        console.log('open menu');
        setMenuVisibility(true);
    }


    const liElement = React.useRef<HTMLLIElement>(null);
    const menuElement = React.useRef<HTMLDivElement>(null);

    React.useEffect(() => console.log('useEffect Menu'));

    console.log('rerender Menu');


    return (
        <div className="h-full w-auto float-right inline">
            <ul className="h-full inline-flex gap-3">
                <li className="text-lg leading-10">Beranda</li>
                <li className="text-lg leading-10">Berita</li>
                <li className="text-lg leading-10">Mobil</li>
                <li ref={liElement} className="text-lg leading-10 w-11 h-10 relative cursor-pointer"
                    onClick={toggleMenu}
                    onMouseEnter={openMenu}
                    onMouseLeave={closeMenu}
                >
                    <img className="mt-0.5 w-8 h-8 rounded-full border-gray-400 border"
                         src={user?.image || NO_IMAGE} alt=""/>
                    <UserMenu refElement={menuElement} isVisible={menuVisibility}/>
                </li>
            </ul>
        </div>
    );
};

export default Menu;