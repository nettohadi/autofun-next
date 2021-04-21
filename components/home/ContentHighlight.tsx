import {ContentType} from "../../types";
import Review from "./Review";
import Content from "./Content";

type Props = {
    title:string;
    contents:ContentType[];
};

export default function ContentHighlight({title, contents}: Props) {
    return (
        <div>
            <div className="h-12 text-2xl font-bold border-b-2 border-gray-300 mb-4">{title}</div>
            <div className="">
                <Review data={contents[0]} index={0}/>
            </div>
            <div>
                {
                    contents.map((item) => {
                        return (
                            <Content data={item} key={item.id} size="small"/>
                        );
                    })
                }
            </div>
        </div>
    );
};