import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../../hooks/hools";

export const PagesPanel: FC = () => {
    const navigate = useNavigate();
    const isActiveRequest = useAppSelector(state => state.isActiveRequest);

    const handleClick = (nav: string) => {
        navigate(`${nav}`)
    }

    return (
        <>
            <button onClick={() => handleClick(`/`)}>Search</button>
            <button
                onClick={() => isActiveRequest && handleClick(`/response`)}
                disabled={!isActiveRequest}
            >
                Response
            </button>
        </>
    )
}