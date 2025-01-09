import { FC } from "react"
import { Response } from "../../components/Response"
import { SearchButton } from "../../components/Search/SearchButton"
import { SearchInput } from "../../components/Search/SearchInput"
import { RequestPanel } from "../../components/Panels/RequestPanel"

export const ResponsePage: FC = () => {

    return (
        <>
            <div>
                <div>
                    <SearchInput />
                    <SearchButton />
                </div>
                <RequestPanel />
            </div>
            <Response />
        </>
    )
}