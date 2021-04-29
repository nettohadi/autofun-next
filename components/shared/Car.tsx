import React from 'react';
import {CarType} from "../../types";
import {NO_IMAGE} from "../../helpers/consts";
import {useRouter} from "next/router";

type Props = { car:CarType };

export default function Car({car}: Props) {
    const router = useRouter();

    return (
        <div onClick={() => router.push('/cars/' + car.id)}>
            <div style={{height:120}}
                 className="relative w-full overflow-hidden background-animate hover-image">
                <img src={car.image || NO_IMAGE} className={`w-full h-full ${!car.image && 'hidden'}`} loading="lazy"/>
            </div>
            <div className="text-center font-semibold">{car.name}</div>
            <div className="text-center font-semibold text-yellow-500" style={{fontSize:15}}>
                Rp.{car.min_price} Juta {car.max_price ? ' - Rp.' + car.max_price + ' Juta' : ''}
            </div>
        </div>
    );
};