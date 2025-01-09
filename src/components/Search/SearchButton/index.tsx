import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../hooks/hools";
import { isActiveRequest } from "../../../redux/slice/isActiveRequestSlice";
import { getRequestAsync } from "../../../redux/slice/listSlice";
import { removeRequest } from "../../../redux/slice/requestSlice";
import { editRequests } from "../../../helper/editRequests";


export const SearchButton: FC = () => {
    const navigate = useNavigate();
    const request = useAppSelector(state => state.request);
    const media = useAppSelector(state => state.media);
    const dispatch = useAppDispatch();


    const handleClick = () => {
        if (request.trim() !== '') {
            console.log(request);
            dispatch(getRequestAsync({ request: editRequests(request), media: media }))
            dispatch(isActiveRequest(true));
            navigate('/response');
        } else {
            dispatch(isActiveRequest(false));
            dispatch(removeRequest());
            navigate('/');
        }
    }

    return (
        <button onClick={handleClick}>Search</button>
    )
}