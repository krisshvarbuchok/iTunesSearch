import { FC, useState } from "react";
import { useAppSelector } from "../../../hooks/hools";
import styles from './index.module.css'


export const ResponseMovie: FC = () => {

    const list = useAppSelector(state => state.list.list);
    const [isOpenId, setIsOpenId] = useState<number[]>([]);

    const handleClick = (id: number): void => {
        setIsOpenId((prev) => prev?.includes(id) ? prev.filter(item => item !== id) : [...prev, id]);
    }

    return (
        <>
            {list?.map((item) => (
                <div
                    key={item.trackId || item.collectionId}
                    className="flex flex-col  pl-3 my-2 w-[95%] sm:w-[70%] h-auto gap-4 bg-gray-800 rounded-md "
                >
                    <div className="flex">

                        <a
                            className="w-7 flex items-center flex-start"
                            href={item.collectionViewUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img src={item.artworkUrl30} />
                        </a>
                        <div className="ml-1 sm:ml-1 md:ml-3 w-full">
                            <div className="flex flex-col sm:flex-row text-white items-start sm:space-x-2 space-y-2">
                                <p className="text-left">
                                    {item.artistName}
                                    <span> - </span>
                                    {item.trackName}
                                </p>
                            </div>
                            <div className="text-white flex flex-row items-center">
                                <p>{item.country}</p>
                                <span className="mx-2"> • </span>
                                <p>{item.collectionPrice}</p>
                                <span className="mx-2"> • </span>
                                <div
                                    className={`flex flex-row cursor-pointer w-6`}
                                    onClick={() => handleClick(item.trackId)}
                                >
                                    <img
                                        src={isOpenId?.includes(item.trackId) ? "/iTunesSearch/up.svg" : "/iTunesSearch/down.svg"}
                                        alt="Toggle"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        className={` ${styles.container} ${isOpenId?.includes(item.trackId) ? styles.open : styles.closed}`}
                    >
                        <div className="w-[90%] h-auto mt-2 pb-6">
                            <video className="w-full h-auto rounded-lg" controls>
                                <source src={item.previewUrl} type="video/mp4" />
                                Your browser does not support the video element.
                            </video>
                        </div>
                    </div>


                </div>
            ))}
        </>
    );

}