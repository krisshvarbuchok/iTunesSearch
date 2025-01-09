import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../hooks/hools";
import { isActiveRequest } from "../../../redux/slice/isActiveRequestSlice";
import { getRequestAsync } from "../../../redux/slice/listSlice";
import { removeRequest } from "../../../redux/slice/requestSlice";


export const SearchButton: FC = () => {
    const navigate = useNavigate();
    const request = useAppSelector(state => state.request);
    const dispatch = useAppDispatch();


    const handleClick = () => {
        if (request.trim() !== '') {
            console.log(request);
            dispatch(getRequestAsync(request))
            dispatch(isActiveRequest(true));
            navigate('/response');
        }else {
            dispatch(isActiveRequest(false));
            dispatch(removeRequest());
            navigate('/');
        }
    }

    return (
        <>
            <button onClick={handleClick}>Search</button>
        </>
    )
}