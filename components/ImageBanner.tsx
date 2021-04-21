import Image from "next/image";
import Menu from "./Menu";

type Props = {};

const ImageBanner = (props: Props) => {

    const image = 'https://images.autofun.co.id/file1/6582f12e06dc42d1b3cefe1004ee4f01_1920x500.jpg';

    return (
        <div className="relative overflow-hidden" style={{height:500}}>
            <div className="absolute top-0  h-24 w-full flex flex-row justify-between z-20 p-5">
                    <Image
                        src="https://www.autofun.co.id/dist/id/images/logo-white-id.09f26c.svg"
                        layout="intrinsic" objectFit="contain" width={180} height={60}
                        className=""/>
                <div className="text-white font-bold">
                    <Menu/>
                </div>
            </div>
            <Image  layout="fill" src={image} objectFit="cover" className="background-animate image-fit" />
            <div className="absolute px-8 top-1/3 w-full  text-center h-auto text-6xl  font-bold text-white text-center">
                <div className="inline-block w-4/5 text-shadow" style={{lineHeight:'70px'}}>
                    Daftar Mobil yang Dapat Diskon Pajak Mulai April, Fortuner dan Kijang Innova Masuk Daftar
                </div>
            </div>
        </div>
    );
};

export default ImageBanner