import React, {useEffect} from 'react';
import WithSideBar from "../../components/shared/WithSideBar";
import {useQuery, gql, useLazyQuery} from "@apollo/client";
import {CarType} from "../../types";
import carQuery from "../../helpers/queries/carQuery";
import * as icon from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {range} from "../../helpers";
import Modal from "../../components/shared/Modal";

type Props = {};
type PageInfoType = {
    currentPage: number,
    total: number,
    perPage: number,
}

type CarsData = {
    carsAll: {
        data: CarType[],
        paginatorInfo: PageInfoType
    }
}

export default function list(props: Props) {
    const [modalVisibility, setModalVisibility] = React.useState(false);

    const [getCars,{data, loading, error}] = useLazyQuery<CarsData>(gql`${carQuery.getAll}`,
        {variables: {}, fetchPolicy: 'cache-and-network'});

    const cars = data?.carsAll?.data;
    const pageInfo = data?.carsAll?.paginatorInfo;
    const actionButtonClass = `py-1 px-2 mr-3 text-yellow-700 border border-yellow-700 rounded hover:text-white 
    hover:bg-yellow-700`;

    const getCarsByPage = (page:number) => {
      getCars({variables:{page}})
    };

    useEffect(() => {
        getCarsByPage(1)
    }, [])

    const [selectedCar, setSelectedCar] = React.useState<CarType>(null);
    const handleView = (car:CarType) => {
        setSelectedCar(car);
        setModalVisibility(true);
    };

    console.log('rerender list')

    return (
        <WithSideBar>
            <Modal isVisible={modalVisibility}>
                <div className="text-right">
                    <div className="inline cursor-pointer border py-2 px-3 hover:bg-black hover:text-white"
                         onClick={() => setModalVisibility(false)}>X</div>
                </div>
                <div>
                    <ModalContent car={selectedCar}/>
                </div>
            </Modal>

            <div className="p-8 pt-24">
                <div className="font-bold text-xl">
                    Cars
                </div>
                <div className="mt-8 shadow-md">
                    <table className="table-v1 w-full">
                        <thead>
                        <tr>
                            <th>Name</th>
                            <th>Price Range</th>
                            <th>Group</th>
                            <th>Brand</th>
                            <th>Actions</th>
                        </tr>
                        </thead>
                        <tbody>
                            {loading && stillLoading}
                            {
                                cars?.map(car => {
                                    return (
                                        <tr key={car.id}>
                                            <td>
                                                <img src={car.image} width={30} height={30} className="inline mr-2"/>
                                                {car.name}
                                            </td>
                                            <td>{car.min_price} jt - {car.max_price} jt</td>
                                            <td>{car.group}</td>
                                            <td>
                                                <img src={car.brand.image} width={30} height={30} className="inline mr-2"/>
                                                {car.brand.name}
                                            </td>
                                            <td>
                                                <button className={actionButtonClass} onClick={() => handleView(car)}>
                                                    <FontAwesomeIcon icon={icon.faEye}/>
                                                </button>
                                                <button className={actionButtonClass}>
                                                    <FontAwesomeIcon icon={icon.faPencilAlt}/>
                                                </button>
                                                <button className={actionButtonClass}>
                                                    <FontAwesomeIcon icon={icon.faTrashAlt}/>
                                                </button>
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                    {
                        pagination(pageInfo, getCarsByPage)
                    }
                </div>
            </div>
        </WithSideBar>
    );
}

const stillLoading = <tr><td colSpan={5} className="text-center font-bold text-lg">Loading Data</td></tr>;
const pagination = (pageInfo: PageInfoType, callback: Function = null)  => {

    if (!pageInfo) return <div></div>;

    const pageCount = Math.ceil((pageInfo.total / pageInfo.perPage));

    return (
        <div className="w-full h-auto flex-row flex gap-2 justify-end p-5">
            {range(pageCount).map((num) => {
              return (
                <div key={num} onClick={() => callback(num)}
                     className={'rounded py-1 px-2 border cursor-pointer '
                     + (pageInfo.currentPage == num ? 'bg-yellow-700 text-white' : 'border-yellow-700 text-yellow-700') }>
                    {num}
                </div>
              );
            })}
        </div>
    )
}

type ModalContentProps = {
    car: CarType
}
const ModalContent = ({car}: ModalContentProps) => {
    return (
        <div>
            <img src={car?.image} width="300px" height="300px" alt="car-image" style={{margin: "0 auto"}}/>
            <div className="text-center font-bold text-2xl">
                {car?.name}
            </div>
            <div className="overflow-hidden mt-1 h-auto p-3 text-gray-500">
                <div className="pt-1 pb-2 px-1.5 h-auto border border-gray-500 rounded inline mr-3">
                    <img src={car?.brand.image} alt="brand" width={27} height={27} className="inline mr-1"/>
                    <div className="inline font-bold text-sm">{car?.brand.name}</div>
                </div>
                <div className="pt-1 pb-2 px-1.5 h-auto border border-gray-500 rounded inline">
                    <FontAwesomeIcon icon={icon.faCarSide} className="mr-2"/>
                    <div className="inline font-bold text-sm">{car?.group}</div>
                </div>
            </div>
            <div className="px-7 overflow-y-auto bg-gray-100 rounded" style={{maxHeight: "calc(100vh - 350px)"}}>
                <div className="text-left p-2 border-b border-gray-600">
                    <div className="text-sm text-gray-500">Segmen</div>
                    <div className="text-md font-bold capitalize">{car?.segmen}</div>
                </div>
                <div className="text-left p-2 border-b border-gray-600">
                    <div className="text-sm text-gray-500">Price Range</div>
                    <div className="text-md font-bold capitalize">{car?.min_price} jt - {car?.max_price} jt </div>
                </div>
                <div className="text-left p-2 border-b border-gray-600">
                    <div className="text-sm text-gray-500">Power</div>
                    <div className="text-md font-bold capitalize">{car?.power} Horse Power</div>
                </div>
                <div className="text-left p-2 border-b border-gray-600">
                    <div className="text-sm text-gray-500">Fuel</div>
                    <div className="text-md font-bold capitalize">{car?.fuel}</div>
                </div>
                <div className="text-left p-2 border-b border-gray-600">
                    <div className="text-sm text-gray-500">Body Type</div>
                    <div className="text-md font-bold capitalize">{car?.body_type}</div>
                </div>
                <div className="text-left p-2 border-b border-gray-600">
                    <div className="text-sm text-gray-500">Transmission</div>
                    <div className="text-md font-bold capitalize">{car?.transmission}</div>
                </div>
            </div>
        </div>
    );
}

