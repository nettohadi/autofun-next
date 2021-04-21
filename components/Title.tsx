import React from 'react';

type Props = {value:String};

export default function Title({value}: Props) {
    return (
        <div>
            <div className="py-4 font-bold text-2xl">
                {value}
            </div>
            <div className="w-full h-0.5 flex-row flex">
                <div className="w-1/5 h-full bg-yellow-400"></div>
                <div className="w-4/5 h-full bg-gray-400"></div>
            </div>
        </div>
    );
};