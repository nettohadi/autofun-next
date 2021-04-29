import {CarType} from "../../types";
import Car from "../shared/Car";

type Props = {
    cars: CarType[],
    title: string
};

export default function CarHighlight({title, cars}: Props) {
    return (
        <div>
            <div className="text-xl font-bold text-center p-1">{title}</div>
            <div className="flex flex-col gap-3">
                {
                    cars.map((item) => {
                        return (
                          <Car car={item} key={item.id}/>
                        );
                    })
                }
            </div>
        </div>
    );
};