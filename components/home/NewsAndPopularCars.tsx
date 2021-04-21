import NewsAndTips from "./NewsAndTips";
import CarHighlight from "./CarHighlight";
import {CarType, ContentType} from "../../types";

type Props = {newsTips:ContentType[],popularCars:CarType[]};

export default function NewsAndPopularCars({newsTips, popularCars}: Props) {
    return (
        <div className="flex flex-row">
            <div className="w-4/5">
                <NewsAndTips newsTips={newsTips}/>
            </div>
            <div className="w-1/5 px-4">
                <CarHighlight cars={popularCars?.slice(0, 6)} title="Most Popular"/>
            </div>
        </div>
    );
};