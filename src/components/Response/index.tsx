import { FC } from "react";
import { useAppSelector } from "../../hooks/hools";

export const Response: FC = () => {

    const list = useAppSelector(state => state.list.list);
    console.log('list', list);
    const media = useAppSelector(state => state.media)


    return (
        <div>
            {list?.map(item => {
                return <li key={item.trackId}>
                    <img src={item.artworkUrl30} />
                    <p>{item.artistName}</p>
                    <p>{item.trackName}</p>
                    <p>{item.country}</p>
                    {/* <p>{item.wrapperType}</p> */}
                    {media === 'music' && <audio controls>
                        <source src={item.previewUrl} type="audio/mpeg" />
                        Your browser does not support the audio element.
                    </audio>}
                    {media === 'movie' && <video controls>
                        <source src={item.previewUrl} type="video/mp4" />
                        Your browser does not support the audio element.
                    </video>}

                </li>
            })}
        </div>
    )
}