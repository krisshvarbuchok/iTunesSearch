import { FC } from "react";
// import { useNavigate } from "react-router-dom";
// import { useAppDispatch, useAppSelector } from "../../../hooks/hools";
// import { changeActiveButton } from "../../../redux/slice/isActiveButtonSlice";
// import { getRequestAsync } from "../../../redux/slice/listSlice";
// import { removeRequest } from "../../../redux/slice/requestSlice";
// import { editRequests } from "../../../helper/editRequests";
// import { changeKindOfSearch } from "../../../redux/slice/kindOfSearchSlice";

type PropsType = {
    handleClick: () => void;
}

export const SearchButton: FC<PropsType> = ({handleClick}) => {

    return (
    <button className="ml-2 px-4 py-2 bg-[#fa1e4e] text-white text-sm font-medium rounded-md hover:bg-[#d0173c] focus:outline-none"
        onClick={handleClick}>
        Search</button>
    )
}