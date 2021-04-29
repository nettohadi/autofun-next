export type BrandType = {
    id: number;
    image: string,
    name: string,
    desc: string
}

export interface ImageType {
    id: number,
    url: string
}

type BodyType = 'SUV' | 'MVP' | 'Sedan' | 'Hatchback';
type FuelType = 'Petroleum' | 'Diesel';
type TransmissionType = 'Manual' | 'Automatic';

export interface CarType {
    id: number;
    name: string;
    image: string;
    min_price: number,
    max_price: number,
    group?: CarGroupType,
    popularity?:number,
    built_year?:number,
    brand?: BrandType,
    images?: ImageType[],
    body_type?: BodyType
    fuel?: FuelType
    transmission?: TransmissionType
    segmen? : string
    power? : number
}

export function getCarPlaceholder(count= 1) : CarType[] {
    let cars:CarType[] = [];
    for(let i = 1;i <= count;i++){
        cars.push({id:i, name: '', image: '', min_price: 0, max_price: 0});
    }

    return cars;
}

type CarGroupType = "LCGC" | "Sedan" | "SUV" | "MVP" | "City Car";

export interface WriterType {
    id:number,
    name:string,
    photo:string
}

export interface ContentType {
    id:number,
    title:string,
    overview:string,
    content:string,
    image:string,
    type?: any,
    writer?:WriterType | null
}

export interface UserType {
    id?:string,
    name?:string,
    email?:string,
    image?:string
}