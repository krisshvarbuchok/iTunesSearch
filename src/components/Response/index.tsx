import { FC } from "react";
import { useAppSelector } from "../../hooks/hools";
import { ResponseAll } from "./ResponseAll";
import { ResponseMusic } from "./ResponseMusic";
import { ResponseMovie } from "./ResponseMovie";

export const Response: FC = () => {
    const isLoading = useAppSelector(state => state.list.isLoading);
    //console.log(isLoading);
    
    const list = useAppSelector(state => state.list.list);
    //console.log('list', list);
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
                    <img className=" text-[#fa1e4e] w-9" src="/iTunesSearch/library.svg" alt="Request" />
                </div>}
                {list?.length === 0 && !isLoading && 
                <div className=" mt-7 flex flex-col items-center">
                     <p className="text-gray-400">There is nothing matching your request.</p>
                     <img className=" text-[#fa1e4e] w-10" src="/iTunesSearch/empty.svg" alt="Request" />
                </div>
                }
            {list?.length !== 0 && !isLoading && kindOfSearch === 'all' && <ResponseAll />}
            {list?.length !== 0 && !isLoading && kindOfSearch === 'music' && <ResponseMusic />}
            {list?.length !== 0 && !isLoading && kindOfSearch === 'movie' && <ResponseMovie />}
        </div >
    )
}




