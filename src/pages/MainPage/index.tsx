import { FC } from "react";
import { RequestPanel } from "../../components/RequestPanel";
import { Search } from "../../components/Search";
import { useAppSelector } from "../../hooks/hools";

export const MainPage: FC = () => {
    const error = useAppSelector(state => state.list.error);
    

    return (
        <div>
            <h1 className="text-3xl font-bold text-white flex justify-center items-center my-[20px]">
                Hello friend!
            </h1>
            <div className="flex justify-center items-center w-full">

                <Search />
                
            </div>
            <RequestPanel />
            {error && <div className="flex justify-center text-red-500 font-bold">{error}</div>}
        </div>
    )
}