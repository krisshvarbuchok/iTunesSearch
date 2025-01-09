import './App.css';
import { FC } from 'react';
import { RouterComponent } from './router';
import { PagesPanel } from './components/Panels/PagesPanel';

export const App: FC = () => {


  return (
    <>
      <h1 className="text-3xl font-bold underline">
        Hello friend!
      </h1>
      <h2 className="text-3xl font-bold underline">
        What are we going to listen to?
      </h2>
      <PagesPanel />
      <RouterComponent />
    </>
  )
}


