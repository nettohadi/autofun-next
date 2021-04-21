import React from 'react';
import {Splide, SplideSlide} from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';
import {ImageType} from "../types";
import {NO_IMAGE} from "../helpers/consts";


type Props = {
    images: ImageType[],
    height:number
};

export default function ImageSlider({images, height}: Props) {
    const _images = images && images.length > 0 ? images : [{id:1, url: NO_IMAGE}];
    if(!images) {
        return (
            <div className="flex justify-center align-middle">Loading</div>
        );
    }
    return (
        <div className="w-full h-full overflow-hidden">
            <Splide
                options={ {
                    type: 'loop',
                    perPage: 1,
                    rewind : true,
                    width  : '100%',
                    height : height,
                    gap    : '1rem',
                } }
            >
                {
                    _images?.map((item) => {
                        return (
                        <SplideSlide key={item.id}>
                            <img src={item.url} loading="lazy"
                                 alt="" className="w-full h-full"/>
                        </SplideSlide>)
                    })
                }
            </Splide>
        </div>
    );
};