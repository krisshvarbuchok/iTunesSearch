import { FC, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks/hools";
import { changeActiveButton } from "../../redux/slice/isActiveButtonSlice";

export const Header: FC = () => {
    const navigate = useNavigate();
    const isActiveButton = useAppSelector(state => state.isActiveButton);
    const dispatch = useAppDispatch();
    

    useEffect(()=>{
        navigate('/')
    }, [])
    
    const handleClick = (nav: string, style: string) => {
        navigate(`${nav}`);
        dispatch(changeActiveButton(style));
    }

    return (
        <div className="min-h-full">
            <nav className="bg-gray-800">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="flex h-16 items-center justify-between">
                        <div className="flex items-center">
                            <div className="shrink-0">
                                <img className="w-[40px] text-[#fa1e4e]" src="/iTunesSearch/logo.svg" alt="Logo" />
                            </div>
                                <div className="ml-10 flex items-baseline space-x-6">

                                    <button onClick={() => handleClick(`/`, 'search')}
                                        className={`rounded-md px-3 py-2 text-sm font-medium ${isActiveButton === "search"
                                            ? "bg-gray-900 text-white"
                                            : "text-gray-300 hover:bg-gray-700 hover:text-white"
                                            }`}
                                    >Search</button>
                                    <button
                                        onClick={() => handleClick(`/response`, 'request')}
                                        className={`rounded-md px-3 py-2 text-sm font-medium ${isActiveButton === "request"
                                            ? "bg-gray-900 text-white"
                                            : "text-gray-300 hover:bg-gray-700 hover:text-white"
                                            }`}
                                    >
                                        Response</button>

                                </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}