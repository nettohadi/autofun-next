import Content from "./Content";
import {ContentType} from "../../types";

type Props = {newsTips:ContentType[]};

export default function NewsAndTips({newsTips}: Props) {

    return (
        <div className="px-8">
            <div className="flex flex-row justify-around">
                <div className="font-bold text-2xl text-left w-3/5">Latest News</div>
                <div className="font-bold text-2xl text-right w-4/5">More</div>
            </div>
            <div className="flex flex-row justify-around">
                <div className="w-full">
                    {
                        newsTips?.map((item) => {
                            return (
                                <Content data={item} key={item.id}/>
                            );
                        })
                    }
                </div>
            </div>
        </div>
    );
};