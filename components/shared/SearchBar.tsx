import React from 'react';

type yellowOrWhite = 'border-yellow-400' | 'border-white';
type shadow = 'none' | 'shadow-xl'
type Props = {
    border?:yellowOrWhite;
    shadow?:shadow;
};

export default function SearchBar({border, shadow}: Props){
    const style = {
        borderWidth: 4
    }

    return (
        <div className={`${shadow} h-full w-full rounded-md overflow-hidden`}>
            <div className={`${border} h-full flex flex-row w-full bg-white justify-around`} style={style}>
                <input type="text" className="h-full p-2 rounded-sm w-4/5" placeholder="Type Anything"/>
                <button className="bg-yellow-400 h-full w-1/5 text-white font-bold" style={{borderRadius:"5px 0px 0px 5px"}}>
                    Cari
                </button>
            </div>
        </div>
    );
};
