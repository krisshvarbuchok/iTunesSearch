import { ChangeEvent, FC } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/hools";
import { changeMediaRequest } from "../../redux/slice/mediaRequestSlice";

export const RequestPanel: FC = () => {
    const media = useAppSelector(state => state.media);
    const dispatch = useAppDispatch();
    const handleCheckboxChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        dispatch(changeMediaRequest(value));
        //console.log(`Selected: ${value}`);
    };

    return (
        <div className="flex justify-center mt-4">
            
            <div>
                <input
                    type="radio"
                    id="all"
                    name="drone"
                    value="all"
                    checked={media === 'all'}
                    onChange={handleCheckboxChange}
                    style={{ display: 'none' }}
                />
                <label htmlFor="all"
                className={`flex flex-col items-center border-2 rounded-md w-16 h-16 text-white font-medium cursor-pointer ${
                    media === 'all' ? "border-[#fa1e4e]" : "border-transparent"
                  } p-2`}
                  >
                    <img className=" text-[#fa1e4e]" src="/iTunesSearch/all.svg" alt="All" width='30px'/>
                   <span>All</span> 
                </label>
            </div>
            <div>
                <input
                    type="radio"
                    id="music"
                    name="drone"
                    value="music"
                    checked={media === 'music'}
                    onChange={handleCheckboxChange}
                    style={{ display: 'none' }}
                />
                <label htmlFor="music"
                className={`flex flex-col items-center border-2 rounded-md w-16 h-16 text-white font-medium cursor-pointer ${
                    media === 'music' ? "border-[#fa1e4e]" : "border-transparent"
                  } p-2`}
                  >
                    <img className=" text-[#fa1e4e]" src="/iTunesSearch/music.svg" alt="Music" width='30px'/>
                   <span>Music</span> 
                </label>
            </div>
            <div>
                <input
                    type="radio"
                    id="movie"
                    name="drone"
                    value="movie"
                    checked={media === 'movie'}
                    onChange={handleCheckboxChange}
                    style={{ display: 'none' }}
                />
                <label htmlFor="movie"
                className={`flex flex-col items-center border-2 rounded-md w-16 h-16 text-white font-medium cursor-pointer ${
                    media === 'movie' ? "border-[#fa1e4e]" : "border-transparent"
                  } p-2`}
                >
                    <img className=" text-[#fa1e4e]" src="/iTunesSearch/movie.svg" alt="Movie" width='30px'/>
                    <span>Movie</span>
                </label>
            </div>
        </div>
    );
};