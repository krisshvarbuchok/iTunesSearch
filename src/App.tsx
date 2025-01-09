import './App.css';
import { FC } from 'react';
import { RouterComponent } from './router';
import { Header } from './components/Header';

export const App: FC = () => {


  return (
    <div className="bg-gray-900 min-h-screen min-w-full">
      <Header />
      <RouterComponent />
    </div>
  )
}


