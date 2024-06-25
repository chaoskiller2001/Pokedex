import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import ListView from "./ListView";
import DetailsView from './DetailsView';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route index element={<ListView />} />
        <Route path="details/:name" element={<DetailsView />} />
      </Routes>
    </BrowserRouter></>
  );
}

export default App


