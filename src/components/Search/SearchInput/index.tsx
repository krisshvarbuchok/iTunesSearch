import { ChangeEvent, FC } from "react";
import { useAppDispatch, useAppSelector } from "../../../hooks/hools";
import { addRequest } from "../../../redux/slice/requestSlice";


export const SearchInput: FC = () => {
   const dispatch = useAppDispatch();
   const request = useAppSelector(state => state.request);

    const handleChange = (event:ChangeEvent<HTMLInputElement>) => {
        //console.log(event.target.value);
        dispatch(addRequest(event.target.value))
    }

    return (
        <>
            <input value={request} onChange={handleChange}/>
        </>
    )
}