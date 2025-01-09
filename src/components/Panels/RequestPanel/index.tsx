import { ChangeEvent, FC } from "react";
import { useAppDispatch, useAppSelector } from "../../../hooks/hools";
import { changeMediaRequest } from "../../../redux/slice/mediaRequestSlice";

export const RequestPanel: FC = () => {
    const media = useAppSelector(state => state.media);
    const dispatch = useAppDispatch();
    const handleCheckboxChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        dispatch(changeMediaRequest(value));
        console.log(`Selected: ${value}`);
    };

    return (
        <>
            
            <div>
                <input
                    type="radio"
                    id="all"
                    name="drone"
                    value="all"
                    checked={media === 'all'}
                    onChange={handleCheckboxChange}
                    // style={{ display: 'none' }}
                />
                <label htmlFor="all">
                    <img src="/all.svg" alt="All" width='30px'/>
                    All
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
                    // style={{ display: 'none' }}
                />
                <label htmlFor="music">
                    <img src="/music.svg" alt="Music" width='30px'/>
                    Music
                </label>
            </div>
            {/* <div>
                <input
                    type="radio"
                    id="audiobook"
                    name="drone"
                    value="audiobook"
                    checked={media === 'audiobook'}
                    onChange={handleCheckboxChange}
                    // style={{ display: 'none' }}
                />
                <label htmlFor="audiobook">
                    <img src="/audiobook.svg" alt="audiobook" width='30px'/>
                    Audiobook
                </label>
            </div> */}
            <div>
                <input
                    type="radio"
                    id="movie"
                    name="drone"
                    value="movie"
                    checked={media === 'movie'}
                    onChange={handleCheckboxChange}
                    // style={{ display: 'none' }}
                />
                <label htmlFor="movie">
                    <img src="/movie.svg" alt="movie" width='30px'/>
                    Movie
                </label>
            </div>
            {/* <div>
                <input
                    type="radio"
                    id="podcast"
                    name="drone"
                    value="podcast"
                    checked={media === 'podcast'}
                    onChange={handleCheckboxChange}
                    // style={{ display: 'none' }}
                />
                <label htmlFor="podcast">
                    <img src="/podcast.svg" alt="podcast" width='30px'/>
                    Podcast
                </label>
            </div> */}
        </>
    );
};