import { FC } from "react";
import { useAppSelector } from "../../hooks/hools";
import { ResponseAll } from "./ResponseAll";
import { ResponseMusic } from "./ResponseMusic";
import { ResponseMovie } from "./ResponseMovie";

export const Response: FC = () => {
    const isLoading = useAppSelector(state => state.list.isLoading);
    console.log(isLoading);
    
    const list = useAppSelector(state => state.list.list);
    console.log('list', list);
    const kindOfSearch = useAppSelector(state => state.kindOfSearch);
  

    return (
        <div className="flex items-center flex-col">
            {isLoading &&
                <div className="flex items-center justify-center space-x-2 mt-2">
                    <div className="w-4 h-4 rounded-full border-4 border-t-4 border-[#fa1e4e] animate-spin"></div>
                    <span className="text-white">Loading...</span>
                </div>

            }
            {list === null && !isLoading &&
                <div className=" mt-7 flex flex-col items-center">
                    <p className="text-gray-400">Your request will be here.</p>
                    <img className=" text-[#fa1e4e] w-9" src="/library.svg" alt="Request" />
                </div>}
                {list?.length === 0 && !isLoading && 
                <div className=" mt-7 flex flex-col items-center">
                     <p className="text-gray-400">There is nothing matching your request.</p>
                     <img className=" text-[#fa1e4e] w-10" src="/empty.svg" alt="Request" />
                </div>
                }
            {list?.length !== 0 && !isLoading && kindOfSearch === 'all' && <ResponseAll />}
            {list?.length !== 0 && !isLoading && kindOfSearch === 'music' && <ResponseMusic />}
            {list?.length !== 0 && !isLoading && kindOfSearch === 'movie' && <ResponseMovie />}
                {/* // list?.map(item => {
                //     return <div key={item.trackId || item.collectionId}
                //     className={`flex items-center pl-3 my-2 w-[95%] sm:w-[70%] ${kindOfSearch === 'all' ? 'h-auto' : 'h-[calc(40px)]'} 
                //     gap-4 bg-gray-800 rounded-md`}
                //        >
                //         <a className="w-7 flex items-center"
                //             href={item.collectionViewUrl}
                //             target="_blank"
                //             rel="noopener noreferrer"
                //         >
                //             <img src={item.artworkUrl30 || `/audiobook.svg`} />

                //         </a>
                //         <div className="ml-1 sm:ml-1 md:ml-3">

                //             <div className="flex flex-col sm:flex-row text-white items-start sm:space-x-2 space-y-2">
                //                 <p className="text-left">{item.artistName}<span > - </span> {item.trackName || item.collectionName}</p>
                //             </div>
                //             <div className="text-white flex flex-row">
                //                 <p>{item.country}</p>
                //                 <span className="mx-2"> • </span>
                //                 {kindOfSearch === 'all' && <p>{item.kind || item.wrapperType}</p>}
                //             </div>
                //         </div>

                        // {kindOfSearch === 'music' && item.kind === 'song' && <audio controls>
                        //     <source src={item.previewUrl} type="audio/mpeg" />
                        //     Your browser does not support the audio element.
                        // </audio>}
                        // {kindOfSearch === 'movie' && item.kind === 'feature-movie' && <video controls>
                        //     <source src={item.previewUrl} type="video/mp4" />
                        //     Your browser does not support the video element.
                        // </video>
                        // }

            //         </div>
            //     })
            // } */}
        </div >
    )
}




