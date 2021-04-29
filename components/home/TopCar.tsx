import React, {useEffect, useState} from 'react';
import {CarType, getCarPlaceholder} from "../../types";
import Car from "../shared/Car";
import Api from "../../helpers/Api";
import {useLazyQuery, gql} from "@apollo/client";
import carQuery from "../../helpers/queries/carQuery";
import Cars from "../shared/Cars";

type Props = {
    cars:CarType[]
};

export default function     TopCar({cars}: Props) {
    const [getByGroup, { data }] = useLazyQuery(gql`${carQuery.getByGroup()}`,
                                {variables: {group: 'MOST_POPULAR'}, fetchPolicy: "cache-first"});

    const [selectedCars, setSelectedcars] = useState<CarType[]>(cars);

    useEffect(() => {
        if(data?.CarsByGroup){
            setSelectedcars(data.CarsByGroup)
        }
    }, [data])

    const categories = [
        {id: 0, name: 'Most Popular', const : 'MOST_POPULAR'},
        {id: 1, name: 'Latest', const : 'LATEST'},
        {id: 2, name: 'LCGC', const : 'LCGC'},
        {id: 3, name: 'SUV', const : 'SUV'},
        {id: 4, name: 'Sedan', const : 'Sedan'},
        {id: 5, name: 'MVP', const : 'MVP'},
        {id: 6, name: 'City Car', const : 'City_Car'}
    ];

    const [selectedGroupId, setSelectedGroupId] = useState("MOST_POPULAR");

    const selectCategory = (group: string) => {
        setSelectedGroupId(group);
        setSelectedcars(getCarPlaceholder(10));
        getByGroup({variables: {group}});
    };




    const selected = "text-yellow-400";



    return (
        <div className="w-full overflow-hidden">
            <div className="grid grid-cols-2 md:grid-cols-5 xl:grid-cols-7 mx-auto border-b-2 pb-3 h-auto" style={{width: '90%'}}>
                {categories.map((item) => {
                    return (
                        <div className={`py-3 ${item.const == selectedGroupId && 'border-b-4 border-yellow-400'}`} key={item.id}>
                            <div style={{minWidth: 100}}
                                 className={`text-left pl-2 py-1 pr-2 border-r-2 cursor-pointer 
                                 ${item.const == selectedGroupId && selected}`}
                                 onMouseEnter={() => selectCategory(item.const)}
                            >
                                {item.name}
                            </div>
                        </div>
                    );
                })}
            </div>
            <Cars cars={selectedCars}/>
            {/*<div className="p-7 overflow-hidden" style={{minHeight: 450}}>*/}
            {/*    <div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-5 sm:grid-cols-3 gap-10">*/}
            {/*        {*/}
            {/*            selectedCars?.map((car) => {*/}
            {/*                return (*/}
            {/*                    <Car car={car} key={car.id}/>*/}
            {/*                )*/}
            {/*            })*/}
            {/*        }*/}
            {/*    </div>*/}
            {/*</div>*/}
        </div>
    );
};