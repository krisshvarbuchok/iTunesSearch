import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../hooks/hools";
import { isActiveRequest } from "../../../redux/slice/isActiveRequestSlice";


export const SearchButton: FC = () => {
    const navigate = useNavigate();
    const request = useAppSelector(state => state.request);
    const dispatch = useAppDispatch();


    const handleClick = () => {
        if (request.trim() !== '') {
            console.log(request);
            dispatch(isActiveRequest(true));
            navigate('/response');
        }else {
            dispatch(isActiveRequest(false));
            navigate('/');
        }
    }

    return (
        <>
            <button onClick={handleClick}>Search</button>
        </>
    )
}