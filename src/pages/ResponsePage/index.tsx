import { FC } from "react"
import { Response } from "../../components/Response"
import { SearchButton } from "../../components/Search/SearchButton"
import { SearchInput } from "../../components/Search/SearchInput"
import { RequestPanel } from "../../components/RequestPanel"

export const ResponsePage: FC = () => {

    return (
        <>
            <div>
                <div className="flex justify-center items-center  mt-6">
                    <SearchInput />
                    <SearchButton />
                </div>
                <RequestPanel />
            </div>
            <Response />
        </>
    )
}