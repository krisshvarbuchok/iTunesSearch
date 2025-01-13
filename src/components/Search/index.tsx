import { FC } from "react";
import { SearchInput } from "./SearchInput";
import { SearchButton } from "./SearchButton";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks/hools";
import { getRequestAsync } from "../../redux/slice/listSlice";
import { editRequests } from "../../helper/editRequests";
import { changeActiveButton } from "../../redux/slice/isActiveButtonSlice";
import { changeKindOfSearch } from "../../redux/slice/kindOfSearchSlice";
import { removeRequest } from "../../redux/slice/requestSlice";

export const Search :FC = () => {

    const navigate = useNavigate();
    const request = useAppSelector(state => state.request);
    const media = useAppSelector(state => state.media);
    const dispatch = useAppDispatch();

    const handleClick = ():void => {
        if (request.trim() !== '') {
            //console.log(request);
            dispatch(getRequestAsync({ request: editRequests(request), media: media }))
            dispatch(changeActiveButton('request'));
            navigate('/response');
            dispatch(changeKindOfSearch(media))
        } else {
            dispatch(changeActiveButton('search'));
            dispatch(removeRequest());
            navigate('/');
        }
    }
    
    return(
        <>
            <SearchInput handleClick={handleClick}/>
            <SearchButton handleClick={handleClick}/>
        </>
    )
}