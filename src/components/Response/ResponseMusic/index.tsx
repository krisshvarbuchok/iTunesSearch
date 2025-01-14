import { FC, useRef, useState } from "react";
import { useAppSelector } from "../../../hooks/hools";
import { Player } from "./Player";


export const ResponseMusic: FC = () => {
    const list = useAppSelector(state => state.list.list);

    const [currentTrack, setCurrentTrack] = useState<number | null>( null);
    const [currentTrackUrl, setCurrentTrackUrl] = useState<string | null>( null);
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef<HTMLAudioElement | null>(null);

    const handlePlay = (trackId: number, previewUrl: string) => {
        if (currentTrack === trackId) {
            // Если трек уже выбран, переключаем воспроизведение
            if (isPlaying) {
                audioRef.current?.pause();
                setIsPlaying(false);
            } else {
                audioRef.current?.play();
                setIsPlaying(true);
            }
        } else {
            // Если трек изменился, обновляем состояние
            setCurrentTrack(trackId);
            setCurrentTrackUrl(previewUrl);
            setIsPlaying(true);
        }
    };
    

    const handlePause = ():void => {
        audioRef.current?.pause();
        setIsPlaying(false);
    };


    return (
        <div className="flex flex-col items-center w-full">
            <div className="w-full flex flex-col items-center">
                {list?.map(item => (
                    <div
                        key={item.trackId}
                        onClick={() => handlePlay(item.trackId, item.previewUrl)}
                        className={`flex items-center pl-3 my-2 w-[95%] sm:w-[70%] h-auto gap-4 bg-gray-800 rounded-md cursor-pointer
                        ${currentTrack === item.trackId ? "bg-gray-700 border-l-4 border-[#fa1e4e]" : ""}`}
                    >
                        <div
                            className="w-7 flex items-center"
                           // href={item.collectionViewUrl}
                            //target="_blank"
                            //rel="noopener noreferrer"
                        >
                            <img
                                src={item.artworkUrl30}
                                className="rounded"
                            />
                        </div>
                        <div className="ml-1 sm:ml-1 md:ml-3">
                            <div className="flex flex-col sm:flex-row text-white items-start sm:space-x-2 space-y-2">
                                <p className="text-left">
                                    {item.artistName}
                                    <span> - </span>
                                    {item.trackName}
                                </p>
                            </div>
                            <div className="text-white flex flex-row">
                                <p>{item.country}</p>
                                <span className="mx-2"> • </span>
                                <p>{item.collectionPrice}$</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <Player currentTrackUrl={currentTrackUrl} isPlaying={isPlaying} handlePause={handlePause} handlePlay={handlePlay} currentTrack={currentTrack} audioRef={audioRef}/>

        </div>
    );
};