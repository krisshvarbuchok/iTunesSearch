import { FC } from "react";

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