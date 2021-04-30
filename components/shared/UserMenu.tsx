import React, {useEffect} from 'react';
import {UserContext} from "./Layout";
import {NO_IMAGE} from "../../helpers/consts";
import * as icon from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Link from 'next/link';
import {gql, useMutation} from "@apollo/client";
import carQuery from "../../helpers/queries/carQuery";
import authMutation from "../../helpers/mutations/authMutation";
import {useRouter} from "next/router";

type Props = {
    isVisible: boolean,
    refElement?: React.RefObject<HTMLDivElement>
};

type LogoutData = {
    Logout: {
        status: boolean,
        message: string
    }
}

export default function UserMenu({isVisible, refElement}: Props) {
    const router = useRouter();
    const {user, setUser} = React.useContext(UserContext);
    const whenSignedIn = 'mt-2 hover:bg-gray-200 px-2 rounded ' + (user.id ? '' : 'hidden');
    const whenSignedout = 'mt-2 hover:bg-gray-200 px-2 rounded ' + (!user.id ? '' : 'hidden');

    const [logout, { data }] = useMutation<LogoutData>(gql`${authMutation.logout}`);

    const handlelogout = () => {
      logout();
    };

    useEffect(() => {
        if(data && data.Logout.status) {
            setUser({});
            router.push('/');
        }
    }, [data])

    console.log('rerender UserMenu');

    return (
        <div ref={refElement}
             className={`absolute shadow-md rounded top-1/2 right-1/2 font-normal ${!isVisible && 'hidden'} w-64
                    text-gray-600 bg-white border border-gray-400 shadow py-2 text-left px-3 overflow-hidden`}
        >
            <ul className="leading-7 gap-3" style={{fontSize: 15}}>
                <li className="border-b border-gray-300 py-3">
                    <div className="flex flex-row gap-3">
                        <div className="inline overflow-hidden">
                            <img className="w-11 h-11 rounded-full border-gray-400 border"
                                 src={user?.image || NO_IMAGE} alt=""/>
                        </div>
                        <div className="inline overflow-hidden leading-5">
                            <div className="font-bold">{user?.name || 'Guest'}</div>
                            <div>{user?.email || 'Not logged in'}</div>
                        </div>

                    </div>
                </li>
                <li className={whenSignedIn}>
                    <FontAwesomeIcon className="mr-2" icon={icon.faUser}></FontAwesomeIcon>
                    Profile
                </li>
                <li className={whenSignedIn}>
                    <FontAwesomeIcon className="mr-2" icon={icon.faFolderOpen}></FontAwesomeIcon>
                    <Link href="/cars/list">
                        <a>Manage</a>
                    </Link>
                </li>
                <li className={whenSignedIn}>
                    <FontAwesomeIcon className="mr-2" icon={icon.faCogs}></FontAwesomeIcon>
                    Settings
                </li>
                <li className={whenSignedIn} onClick={() => logout()}>
                    <FontAwesomeIcon className="mr-2" icon={icon.faSignOutAlt}></FontAwesomeIcon>
                    Sign Out
                </li>
                <li className={whenSignedout}>
                    <FontAwesomeIcon className="mr-2" icon={icon.faSignInAlt}></FontAwesomeIcon>
                    <Link href="/signIn">
                        <a>Sign In</a>
                    </Link>
                </li>
            </ul>
        </div>
    );
};