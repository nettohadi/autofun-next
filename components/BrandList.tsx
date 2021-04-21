import {BrandType} from "../types";
import Image from "next/image";
import Link from "next/link";
import {useRouter} from "next/router";

type DirectionType = 'Horizontal' | 'Vertical';
type Props = {
    brands:BrandType[],
    itemDirection?: DirectionType,
    selectedId?: Number
};


export default function BrandList({brands, itemDirection = 'Horizontal', selectedId}: Props) {
    console.log('rerender brand list');
    const router = useRouter();

    const goToCarList = brandId => {
        router.push('/brands/' + brandId);
    }

    return (
        <div className="w-full text-center">
            <div className="inline-block" style={{width: "95%"}}>
                <div className={`grid ${itemDirection == 'Horizontal' ? 'grid-cols-3 md:grid-cols-4 xl:grid-cols-8' : 'grid-cols-1'}  mx-auto`}>
                    {
                        brands?.map((brand) => {
                            return (
                                <div className={`overflow-hidden w-full mx-auto p-3 ${(selectedId == brand.id ) && 'rounded border-2'}`}
                                     style={{maxWidth: 100, height: 'auto'}}
                                     key={brand.id}>
                                    <div className="w-full text-center">
                                        {/*<Image className="inline-block hover-image background-animate"*/}
                                        {/*       src={brand.image} width={60} height={60} layout={'fixed'}*/}
                                        {/*       onClick={() => goToCarList(brand.id)}*/}
                                        {/*/>*/}

                                        <img src={brand.image}
                                             className="hover-image background-animate inline-block"
                                             style={{width:60, height:60}}
                                             onClick={() => goToCarList(brand.id)}
                                             alt=""/>

                                    </div>
                                    <div>{brand.name}</div>
                                </div>
                            );
                        })
                    }
                </div>
            </div>
        </div>
    );
};