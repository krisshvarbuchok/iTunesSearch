import { FC, MutableRefObject, useEffect, useState } from "react";
import { useAppSelector } from "../../../../hooks/hools";
import { formatTime } from "../../../../helper/formatTime";

type PropsType = {
    currentTrackUrl: string | null;
    isPlaying: boolean; 
    handlePause: () => void;
    handlePlay: (trackId: number, previewUrl: string) => void;
    currentTrack: number | null; 
    audioRef: MutableRefObject<HTMLAudioElement | null>;
}

export const Player: FC<PropsType> = ({currentTrackUrl, isPlaying, handlePause, handlePlay, currentTrack, audioRef}) => {
        const list = useAppSelector(state => state.list.list);
  const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);

    useEffect(() => {
        if (currentTrackUrl && audioRef.current) {
            audioRef.current.pause(); // Останавливаем текущий трек
            audioRef.current.src = currentTrackUrl; // Устанавливаем новый источник
            audioRef.current.load(); // Загружаем новый трек
            audioRef.current.play(); // Воспроизводим новый трек
        }
    }, [currentTrackUrl]);

    return (
        <>
          {currentTrackUrl && (
                <div className="fixed bottom-0 left-0 w-full bg-gray-900 text-white flex items-center justify-center border-t-2 border-[#fa1e4e] px-4 py-4 h-16">
                    <div className="flex items-center">
                        <button
                            onClick={() => {
                                if (isPlaying) handlePause();
                                else handlePlay(currentTrack!, currentTrackUrl);
                            }}
                            className="mr-4"
                        >
                            {isPlaying ? (
                                <span className="material-icons">
                                    <img src="/pause.svg"  className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10" alt="Pause" />
                                </span>
                            ) : (
                                <span className="material-icons">
                                    <img src="/play.svg"  className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10" alt="Play" />
                                </span>
                            )}
                        </button>
                    </div>
                    <div className=" px-4">
                        <p className="text-sm">
                            {list?.find(item => item.trackId === currentTrack)?.artistName || "No track playing"}
                            <span> - </span>
                            {list?.find(item => item.trackId === currentTrack)?.trackName}
                        </p>
                        <input
                            type="range"
                            min="0"
                            max={duration}
                            value={currentTime}
                            onChange={(e) => {
                                if (audioRef.current) {
                                    audioRef.current.currentTime = Number(e.target.value);
                                }
                            }}
                            className="w-full h-1 appearance-none cursor-pointer bg-gray-600 rounded outline-none accent-[#fa1e4e]"

                        />


                    </div>
                    <div className="flex justify-between px-4 text-xs">
                        <span>
                            {formatTime(audioRef.current?.currentTime || 0)}
                        </span>
                        <span>/</span>
                        <span>
                            {formatTime(audioRef.current?.duration || 0)}
                        </span>
                    </div>
                    <audio
                        ref={audioRef}
                        onTimeUpdate={() => {
                            if (audioRef.current) {
                                setCurrentTime(audioRef.current.currentTime); // Текущее время трека
                            }
                        }}
                        onLoadedMetadata={() => {
                            if (audioRef.current) {
                                setDuration(audioRef.current.duration); // Общая длительность трека
                            }
                        }}
                        className="hidden"
                    />

                </div>
            )}

        
        </>
    )
}