import { FC } from "react";
import { useAppSelector } from "../../../hooks/hools";


export const ResponseAll: FC = () => {
    const list = useAppSelector(state => state.list.list);
    
    
    return (
        <>
            {
                list?.map(item => {
                    return <div key={item.trackId || item.collectionId}
                        className={`flex items-center pl-3 my-2 w-[95%] sm:w-[70%] h-auto'} 
    gap-4 bg-gray-800 rounded-md`}
                    >
                        <a className="w-7 flex items-center"
                            href={item.collectionViewUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img src={item.artworkUrl30 || `/iTunesSearch/audiobook.svg`} />

                        </a>
                        <div className="ml-1 sm:ml-1 md:ml-3">

                            <div className="flex flex-col sm:flex-row text-white items-start sm:space-x-2 space-y-2">
                                <p className="text-left">{item.artistName}<span > - </span> {item.trackName || item.collectionName}</p>
                            </div>
                            <div className="text-white flex flex-row">
                                <p>{item.country}</p>
                                <span className="mx-2"> • </span>
                                <p>{item.kind || item.wrapperType}</p>
                            </div>
                        </div>
                    </div>

                })
            }
        </>
    )
}