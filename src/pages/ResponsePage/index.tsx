import { FC } from "react"
import { Response } from "../../components/Response"
import { RequestPanel } from "../../components/RequestPanel"
import { Search } from "../../components/Search"

export const ResponsePage: FC = () => {

    return (
        <>
            <div>
                <div className="flex justify-center items-center  mt-6">
                    <Search />
                </div>
                <RequestPanel />
            </div>
            <Response />
        </>
    )
}