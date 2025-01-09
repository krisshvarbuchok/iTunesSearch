import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../hooks/hools";
import { changeActiveButton } from "../../../redux/slice/isActiveButtonSlice";
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
            dispatch(changeActiveButton('request'));
            navigate('/response');
        } else {
            dispatch(changeActiveButton('search'));
            dispatch(removeRequest());
            navigate('/');
        }
    }

    return (
        <button className="ml-2 px-4 py-1.5 bg-[#fa1e4e] text-white text-sm font-medium rounded-md hover:bg-[#d0173c] focus:outline-none" onClick={handleClick}>Search</button>
    )
}