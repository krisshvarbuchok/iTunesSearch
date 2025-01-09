import { FC } from "react"
import { Response } from "../../components/Response"
import { SearchButton } from "../../components/Search/SearchButton"
import { SearchInput } from "../../components/Search/SearchInput"

export const ResponsePage: FC = () => {

    return (
        <>
            <div>
                <SearchInput />
                <SearchButton />
            </div>
            <Response />
        </>
    )
}