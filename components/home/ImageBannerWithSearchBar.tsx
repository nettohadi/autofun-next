import React from 'react';
import ImageBanner from "../shared/ImageBanner";
import SearchBar from "../shared/SearchBar";

type Props = {};

export default function ImageBannerWithSearchBar(props: Props) {
    return (
        <div className="relative">
            <ImageBanner/>
            <div className="absolute -bottom-12 text-center w-full">
                <div className="inline-block w-3/5" style={{height:70}}>
                    <SearchBar border={"border-white"} shadow={"shadow-xl"}/>
                </div>
            </div>
        </div>
    );
};