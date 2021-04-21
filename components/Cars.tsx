import React from 'react';
import {CarType} from "../types";
import Car from "./Car";

type ColCountType = 4 | 5;
type Props = {cars: CarType[], initialColCount?:ColCountType};

export default function Cars({cars, initialColCount = 5}: Props) {
    return (
        <div className="p-7 overflow-hidden" style={{minHeight: 450}}>
            <div className={`grid grid-cols-2 md:grid-cols-4 xl:grid-cols-${initialColCount} sm:grid-cols-3 gap-10`}>
                {
                    cars?.map((car) => {
                        return (
                            <Car car={car} key={car.id}/>
                        )
                    })
                }
            </div>
        </div>
    );
};