import { FC } from "react";
import { SearchInput } from "../../components/Search/SearchInput";
import { SearchButton } from "../../components/Search/SearchButton";
import { RequestPanel } from "../../components/RequestPanel";

export const MainPage: FC = () => {


    return (
        <div>
            <h1 className="text-3xl font-bold text-white flex justify-center items-center my-[20px]">
                Hello friend!
            </h1>
            <div className="flex justify-center items-center w-full">

                <SearchInput />
                <SearchButton />
                
            </div>
            <RequestPanel />
        </div>
    )
}