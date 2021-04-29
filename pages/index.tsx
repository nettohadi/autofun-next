import Head from 'next/head'
import Api from "../helpers/Api";
import BrandList from "../components/shared/BrandList";
import {BrandType, CarType, ContentType} from "../types";
import Header from "../components/shared/Header";
import Spacer from "../components/shared/Spacer";
import ImageBannerWithSearchBar from "../components/home/ImageBannerWithSearchBar";
import TopCar from "../components/home/TopCar";
import Reviews from "../components/home/Reviews";
import NewsAndPopularCars from "../components/home/NewsAndPopularCars";
import Footer from "../components/shared/Footer";
import NewsAndReviews from "../components/home/NewsAndReviews";
import {useEffect, useRef, useState} from "react";
import {fetchUsingGql} from "../helpers/apollo";
import brandQuery from "../helpers/queries/brandQuery";
import contentQuery from "../helpers/queries/contentQuery";
import carQuery from "../helpers/queries/carQuery";

export async function getServerSideProps(context) {
    const {data: _brand} = await fetchUsingGql(brandQuery.getAll);
    const brands = _brand.brands;

    const {data:_car} = await fetchUsingGql(carQuery.getByGroup(), {group: "MOST_POPULAR"});
    const cars = _car.CarsByGroup;

    const {data: _review} = await fetchUsingGql(contentQuery.getContentByType("REVIEW", 3));
    const reviews = _review.contents.data;

    const {data: _news} = await fetchUsingGql(contentQuery.getContentByType("NEWS", 4));
    const newsTips = _news.contents.data;

    return {
        props: {brands, cars, reviews, newsTips}, // will be passed to the page component as props
    }
}

type Props = {
    brands: BrandType[],
    cars: CarType[],
    reviews: ContentType[],
    newsTips: ContentType[],
    popularCars: CarType[]
}


export default function Home({brands, cars, reviews, newsTips, popularCars}: Props) {

    useEffect(() => console.log('rerender the page'));

    return (
        <div>
            <Head>
                <title>Autofun | Brands</title>
            </Head>
            {/*<Spacer height={80}/>*/}
            <ImageBannerWithSearchBar/>
            <Spacer height={100}/>
            <BrandList brands={brands}/>
            <TopCar cars={cars}/>
            <Spacer height={30}/>
            <Reviews reviews={reviews}/>
            <Spacer height={30}/>
            <NewsAndPopularCars newsTips={newsTips} popularCars={cars}/>
            <Spacer height={50}/>
            <NewsAndReviews reviews={reviews} newsTips={newsTips}/>
            <Spacer height={50}/>
        </div>
    )
}
