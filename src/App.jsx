import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import ListView from "./ListView";
import DetailsView from "./DetailsView";
import FavoritesList from "./FavoritesList";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<ListView />} />
          <Route path="details/:name" element={<DetailsView />} />
          <Route path="favorites" element={<FavoritesList />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
