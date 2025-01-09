import { ChangeEvent, FC } from "react";
import { useAppDispatch, useAppSelector } from "../../../hooks/hools";
import { addRequest } from "../../../redux/slice/requestSlice";


export const SearchInput: FC = () => {
    const dispatch = useAppDispatch();
    const request = useAppSelector(state => state.request);

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        //console.log(event.target.value);
        dispatch(addRequest(event.target.value))
    }

    return (

        <div className="flex w-[70%] max-w-2xl items-center rounded-md bg-gray-900 pl-3 pr-3 outline outline-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-[#fa1e4e]">

        <input 
          value={request} 
          onChange={handleChange} 
          className="flex-grow py-1.5 pl-1 pr-3 text-base text-gray-100 placeholder:text-gray-400 bg-gray-900 focus:outline-none focus:ring-0 sm:text-sm" 
          placeholder="What are we going to listen to?" 
        />
      
      </div>
      
    )
}