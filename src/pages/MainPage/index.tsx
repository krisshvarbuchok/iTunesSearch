import { FC } from "react";
import { SearchInput } from "../../components/Search/SearchInput";
import { SearchButton } from "../../components/Search/SearchButton";
import { RequestPanel } from "../../components/Panels/RequestPanel";

export const MainPage: FC = () => {


    return (
        <>
            <div>
                <SearchInput />
                <SearchButton />
            </div>
            <RequestPanel />
        </>
    )
}