import { FC } from "react";
import { RequestPanel } from "../../components/RequestPanel";
import { Search } from "../../components/Search";

export const MainPage: FC = () => {


    return (
        <div>
            <h1 className="text-3xl font-bold text-white flex justify-center items-center my-[20px]">
                Hello friend!
            </h1>
            <div className="flex justify-center items-center w-full">

                <Search />
                
            </div>
            <RequestPanel />
        </div>
    )
}