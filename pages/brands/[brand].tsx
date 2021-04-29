import {GetStaticProps, GetStaticPropsResult} from "next";
import {ParsedUrlQuery} from "querystring";
import {fetchUsingGql} from "../../helpers/apollo";
import carQuery from "../../helpers/queries/carQuery";
import {BrandType, CarType} from "../../types";
import Head from "next/head";
import Header from "../../components/shared/Header";
import {useQuery, gql} from "@apollo/client";
import {useRouter} from "next/router";
import brandQuery from "../../helpers/queries/brandQuery";
import Image from "next/image";
import {NO_IMAGE} from "../../helpers/consts";
import Title from "../../components/shared/Title";
import Cars from "../../components/shared/Cars";
import BrandList from "../../components/shared/BrandList";
import Footer from "../../components/shared/Footer";

type Props = {

};

type BrandData = {
    brands : BrandType[]
}

type CarData = {
    cars : { data: CarType[] }
}

export default function brand({}: Props) {
    const router = useRouter();
    const {brand : brand_id} = router.query;
    const car = useQuery<CarData>(gql`${carQuery.getByBrand}`,{variables: {brand_id: brand_id}});
    const currentBrand = car.data?.cars?.data[0]?.brand;
    const brand = useQuery<BrandData>(gql`${brandQuery.getAll}`)

    return (
        <div>
            <Head>
                <title>Autofun | Home</title>
            </Head>
            <div className="p-12 pt-24 flex flex-row gap-7">
                <div className="p-3" style={{width:'15%'}}>
                    {brand.error && 'error'}
                    <div className="thin-scrollbar overflow-y-auto" style={{maxHeight:500}}>
                        <BrandList brands={brand?.data?.brands} selectedId={currentBrand?.id} itemDirection={"Vertical"}/>
                    </div>
                </div>
                <div className="font-bold text-lg" style={{width:'85%'}}>
                    <div>
                        <Title value={currentBrand?.name}/>
                        <div className="flex flex-row h-32 overflow-hidden mt-3">
                            <div className="w-1/5 h-full">
                                <Image src={car.data?.cars?.data[0]?.brand.image || NO_IMAGE}
                                       width={120}
                                       height={120}
                                       objectFit={'cover'}
                                       layout="fixed"/>
                            </div>
                            <div className="w-4/5 h-full font-normal text-sm p-3">{car.data?.cars.data[0]?.brand.desc}</div>
                        </div>
                    </div>
                    <Title value={`${currentBrand?.name || ''} Cars in Indonesia`}/>
                    <div className="mt-3">
                        {car.loading && 'Loading ...'}
                        {car.error && 'error'}
                        <Cars cars={car.data?.cars.data} initialColCount={4}/>
                    </div>
                </div>

            </div>
        </div>
    );
};