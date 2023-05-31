import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
import RecipeViewPage from "./pages/RecipeViewPage";
import RecipeListPage from "./pages/RecipeListPage";
import Layout from "./ui/Layout/Layout";

function App() {
  return (
    <div className="App">
      <Layout>
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<MainPage />} />
            <Route exact path="/list" element={<RecipeListPage />} />
            <Route exact path="/view" element={<RecipeViewPage />} />
          </Routes>
        </BrowserRouter>
      </Layout>
    </div>
  );
}

export default App;
