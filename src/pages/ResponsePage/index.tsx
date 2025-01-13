import { FC } from "react"
import { Response } from "../../components/Response"
import { RequestPanel } from "../../components/RequestPanel"
import { Search } from "../../components/Search"
import { useAppSelector } from "../../hooks/hools"

export const ResponsePage: FC = () => {
    const error = useAppSelector(state => state.list.error);

    return (
        <>
            <div>
                <div className="flex justify-center items-center  mt-6">
                    <Search />
                </div>
                <RequestPanel />
                {error && <div className="flex justify-center text-red-500 font-bold">{error}</div>}
            </div>
            <Response />
        </>
    )
}