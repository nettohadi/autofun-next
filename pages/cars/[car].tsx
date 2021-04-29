import React, {useEffect} from 'react';
import {useRouter} from "next/router";
import {useQuery, gql} from "@apollo/client";
import carQuery from "../../helpers/queries/carQuery";
import {CarType} from "../../types";
import Image from "next/image";
import {NO_IMAGE} from "../../helpers/consts";
import dynamic from "next/dynamic";

const ImageSlider = dynamic(
    () => {
        return import("../../components/shared/ImageSlider");
    },
    { ssr: false }
);



type Props = {};

type CarData = {
    car: CarType
}

export default function CarDetails(props: Props) {
    const router = useRouter();
    const {car : car_id} = router.query;
    const carGraph = useQuery<CarData>(gql`${carQuery.getById}`,{variables:{car_id}});
    const car = carGraph.data?.car;
    const isAuthenticated = carGraph.error?.graphQLErrors[0].extensions.category != 'authentication';

    useEffect(() => { console.log(car)},[car])

    useEffect(() => {
        if(!isAuthenticated) {
            router.push('/signIn');
        }
    }, [isAuthenticated])

    return (
        <div className="main-wrapper p-5">
            {carGraph.loading && 'Loading ...'}
            <div className="overflow-hidden p-4">
                <div className="flex flex-row mb-5">
                    <div style={{maxWidth:60}}><Image src={car?.brand.image || NO_IMAGE} width={50} height={50}/></div>
                    <div className="w-3/5 font-bold text-2xl p-3">{car?.name}</div>
                </div>
                <div className="flex md:flex-row flex-col gap-3 overflow-hidden" style={{height:'auto'}}>
                    <div className="w-1/2">
                        <ImageSlider images={car?.images} height={400}/>

                    </div>
                    <div className="w-1/2">
                        <table className="table-data w-full">
                            <tr className="">
                                <td className="label">Name</td>
                                <td className="value">{car?.name || 'loading ...'}</td>
                            </tr>
                            <tr>
                                <td className="label">Segmen</td>
                                <td className="value">{car?.segmen || 'loading ...'}</td>
                            </tr>
                            <tr>
                                <td className="label">Brand</td>
                                <td className="value">{car?.brand.name || 'loading ...'}</td>
                            </tr>
                            <tr>
                                <td className="label">Body Type</td>
                                <td className="value">{car?.body_type || 'loading ...'}</td>
                            </tr>
                            <tr>
                                <td className="label">Power</td>
                                <td className="value">{ (car?.power || 0) + ' HP'}</td>
                            </tr>
                            <tr>
                                <td className="label">Built Year</td>
                                <td className="value">{car?.built_year || 'loading ...'}</td>
                            </tr>
                            <tr>
                                <td className="label">Transmission</td>
                                <td className="value">{car?.transmission || 'loading ...'}</td>
                            </tr>
                            <tr>
                                <td className="label">Fuel</td>
                                <td className="value">{car?.fuel || 'loading ...'}</td>
                            </tr>
                            <tr>
                                <td className="label">Price Range</td>
                                <td className="value">
                                    Rp.{car?.min_price} Juta {car?.max_price ? ' - Rp.' + car?.max_price + ' Juta' : ''}
                                </td>
                            </tr>
                        </table>
                    </div>
                </div>

            </div>
        </div>
    );
};