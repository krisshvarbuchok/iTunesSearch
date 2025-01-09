import './App.css';
import {FC} from 'react';
import { RouterComponent } from './router';
import { PagesPanel } from './components/Panels/PagesPanel';

export const App : FC = () => {


  return (
    <>
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>
      <PagesPanel />
      <RouterComponent />
    </>
  )
}


