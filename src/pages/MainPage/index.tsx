import { FC } from "react";
import { SearchInput } from "../../components/Search/SearchInput";
import { SearchButton } from "../../components/Search/SearchButton";

export const MainPage: FC = () => {


    return(
        <>
            <SearchInput />
            <SearchButton />
        </>
    )
}