import React from 'react';
import {ContentType} from "../../types";
import {NO_IMAGE} from "../../helpers/consts";
import Image from "next/image";


type Props = {
    data:ContentType,
    index:number
};

export default function Review({data, index}: Props) {
    return !data ? (<div></div>) : (
        <div className={`relative review-${index + 1} overflow-hidden cursor-pointer`} key={data.id}>
            <img src={data.image || NO_IMAGE} loading="lazy"
                 className={`background-animate h-full w-full darken-image-80 hover-image ${ !data.image && 'object-none'}`}
                 alt="image"/>
            <div className="text-shadow absolute bottom-5 text-white text-2xl font-bold w-full text-left px-4 two-liner">
                {data.title}
            </div>
        </div>
    );
};