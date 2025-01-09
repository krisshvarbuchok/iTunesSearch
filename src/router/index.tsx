import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import { MainPage } from "../pages/MainPage";
import { ResponsePage } from "../pages/ResponsePage";

export const RouterComponent: FC = () => {

    return(
        <Routes>
            <Route path='/' element={<MainPage />}/>
            <Route path='/response' element={<ResponsePage />}/>
            <Route path='*' element={<MainPage />}/>
        </Routes>
    )
}