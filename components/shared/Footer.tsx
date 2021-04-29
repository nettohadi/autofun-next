import {CarType} from "../../types";

type Props = {
    cars:CarType[]
};

export default function Footer({cars}: Props) {
    return (
        <div className="h-auto flex flex-row p-7 overflow-hidden" style={{background:'#282828'}}>
            <div className="w-2/5">
                <div className="h-16 w-3/5 pr-4 mb-2">
                    <img className="h-full w-full"
                        src="https://www.autofun.co.id/dist/id/images/logo-footer-id.b14c22.svg" loading="lazy" alt=""/>
                </div>
                <p className="text-gray-500 w-full">
                    Autofun.co.id adalah situs otomotif lengkap yang menyediakan berita mobil, ulasan, dengan sarana
                    untuk membantu Anda membandingkan berbagai model. Semua yang Anda butuhkan untuk menemukan mobil
                    sempurna ada di sini.
                </p>
            </div>
            <div className="w-1/5">
                <div className="text-white font-bold mb-4">
                    Popular Cars
                </div>
                {
                    cars?.slice(0, 5).map((item) => {
                        return (
                            <div className="text-gray-500 mb-1" key={item.id}>{item?.name}</div>
                        );
                    })
                }
            </div>
            <div className="w-1/5">
                <div className="text-white font-bold mb-4">
                    Berita & Ulasan
                </div>
                <div className="text-gray-500 mb-1">Latest</div>
                <div className="text-gray-500 mb-1">Reviews</div>
                <div className="text-gray-500 mb-1">Guides</div>
                <div className="text-gray-500 mb-1">Tips</div>
                <div className="text-gray-500 mb-1">Owner Reviews</div>
            </div>
            <div className="w-1/5"></div>
        </div>
    );
};