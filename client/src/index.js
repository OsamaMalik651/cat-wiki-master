import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import Home from './Pages/Home';
import DetailsPage from './Pages/DetailsPage/Index';
import TopBreeds from './Pages/TopBreeds';
import { CatContextProvider } from './context/cat-context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <CatContextProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="top-10-searched-breeds" element={<TopBreeds />} />
          <Route path=":details" element={<DetailsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </CatContextProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
