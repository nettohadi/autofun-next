import React, {useEffect, useState} from 'react';
import {gql, useMutation} from "@apollo/client";
import loginQuery from "../helpers/mutations/authMutation";
import carQuery from "../helpers/queries/carQuery";
import {useRouter} from "next/router";
import {UserContext} from "../components/shared/Layout";
import {debounce} from "../helpers";

type Props = {};
type LoginInput = {
    email: string,
    password: string
}

export default function signIn(props: Props) {
    const {setUser} = React.useContext(UserContext);
    const [loginInput, setLoginInput] = useState<LoginInput>({email: '', password: ''});
    const [login, {data, error, loading}] = useMutation(gql`${loginQuery.login}`,
        {variables: {...loginInput}, errorPolicy: 'all'});

    const router = useRouter();

    useEffect(() => {
        if (data?.Login) {
            localStorage.setItem('apollo_token', data.Login.access_token);
            setUser(data.Login.user);
            router.push('/');
        }
    }, [data])

    const handleSubmit = (e) => {
        e.preventDefault();
        try {
            login();
        } catch (e) {
            console.error(e);
        }

    }

    const handleChange = (data) => {
        debounce(() => setLoginInput({...loginInput, ...data}), 300)
    }

    console.log({loginInput});

    return (
        <div className="shadow-md border-2 border-gray-200 rounded overflow-hidden py-2 px-5" style={styles.container}>
            <div className="w-full pt-2 pb-5 font-bold text-2xl text-center"> Welcome Back</div>
            <form onSubmit={handleSubmit}>
                <div className="flex flex-row gap-2 mb-2 py-1">
                    <div className="flex-1">
                        <input onChange={(e) => handleChange({email: e.target.value})}
                               type="text" className="bg-gray-200 p-2 rounded w-full" placeholder="Email"/>
                    </div>
                </div>
                <div className="flex flex-row gap-2 py-1">
                    {/*<div className="p-1 font-bold text-yellow-900" style={{width: 90}}>Password :</div>*/}
                    <div className="flex-1">
                        <input type="text" onChange={(e) => handleChange({password: e.target.value})}
                               className="bg-gray-200 p-2 rounded w-full" placeholder="Password"/>
                    </div>
                </div>
                <div className="text-red-700">
                    {error && error.message}
                </div>
                <div className="w-full pb-3 pt-10">
                    <button onClick={handleSubmit}
                            className=" bg-yellow-400 p-2 w-full rounded font-bold text-yellow-900">
                        {loading ? 'Signing In ...' : 'Sign In'}
                    </button>
                </div>
            </form>
        </div>
    );
};

const styles = {
    container: {
        margin: '15% auto',
        width: '95%',
        maxWidth: 400
    },
};