import Review from "./Review";
import {ContentType} from "../../types";

type Props = {reviews:ContentType[]};

export default function Reviews({reviews}: Props) {
    return (
        <div className="review-container px-8 pt-0 pb-5 w-full">
            {
                reviews?.map((review, index) => {
                    return (
                      <Review data={review} key={review.id} index={index}/>
                    );
                })
            }
        </div>
    );
};