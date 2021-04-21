import {ContentType} from "../../types";
import ContentHighlight from "./ContentHighlight";

type Props = {
    reviews: ContentType[],
    newsTips: ContentType[]
};

export default function NewsAndReviews({reviews, newsTips}: Props) {
    return (
        <div className="flex flex-row gap-5 px-6">
            <div className="w-1/2">
                <ContentHighlight title='News' contents={newsTips.slice(0, 3)}/>
            </div>
            <div className="w-1/2">
                <ContentHighlight title='Reviews' contents={reviews}/>
            </div>
        </div>
    );
};