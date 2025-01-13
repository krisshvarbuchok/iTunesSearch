import { ChangeEvent, FC, KeyboardEvent, useEffect, useRef } from "react";
import { useAppDispatch, useAppSelector } from "../../../hooks/hools";
import { addRequest } from "../../../redux/slice/requestSlice";

type PropsType = {
  handleClick: () => void;
}

export const SearchInput: FC<PropsType> = ({ handleClick }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const dispatch = useAppDispatch();
  const request = useAppSelector(state => state.request);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    //console.log(event.target.value);
    dispatch(addRequest(event.target.value))
  }
  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleClick();
    }
  }
  useEffect(() => {
    inputRef.current?.focus()
  }, [])

  return (

    <div className="flex w-[70%] max-w-2xl items-center rounded-md bg-gray-900 pl-3 pr-3 outline outline-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-[#fa1e4e]">

      <input
        ref={inputRef}
        type="text"
        value={request}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        className="flex-grow py-2 pl-1 pr-3 text-base text-gray-100 placeholder:text-gray-400 placeholder:sm:text-xs placeholder:md:text-sm bg-gray-900 focus:outline-none focus:ring-0 sm:text-sm "
        placeholder="Search..."
      />
    </div>

  )
}