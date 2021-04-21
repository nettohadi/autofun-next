import {NO_IMAGE} from "../../helpers/consts";
import {ContentType} from "../../types";
import Image from "next/image";

type SizeType = 'small' | 'big';
type Props = {data:ContentType, size?:SizeType};

export default function Content({data, size = 'big'}: Props) {
    return (
        <div className={`flex flex-row my-4 overflow-hidden ${size == 'small' ? 'h-28' : 'h-64'}`}>
            {/*Image*/}
            <div className="overflow-hidden h-full" style={{width:(size == 'small' ? 150 : '35%')}}>
                {/*<img src={data.image || NO_IMAGE} className="background-animate w-full h-full hover-image" loading="lazy" alt="news"/>*/}
                <Image src={data.image || NO_IMAGE}
                       className="background-animate hover-image image-fit" width={400} height={300}
                       layout="responsive"/>
            </div>
            <div className="flex-1 flex flex-col px-3">
                <div className={`h-auto two-liner font-bold ${size == 'small' ? 'text-md' : 'text-2xl'}`}>{data.title}</div>
                <div className={`text-justify ${size == 'small' ? 'hidden' : 'my-3 four-liner h-2/5'}`}>
                    {data.overview}
                </div>
                <div className="h-1/5 flex flex-row justify-start">
                    <div className="w-full flex-row flex gap-2 justify-start p-3">
                        <div className={`w-8 ${size=='small' && 'hidden'}`}>
                            <img src={data.writer?.photo}
                                 alt="writer"
                                 className="rounded-full w-7 h-7"/>
                        </div>
                        <div className="text-left">{data.writer?.name}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};