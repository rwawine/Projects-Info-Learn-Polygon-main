import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import LandingPage from "./pages/LandingPage/LandingPage";
import NewsPage from "./pages/NewsPage/NewsPage";
import Katarium from "./pages/Katarium/Katarium";
import InfoPage from "./pages/InfoPage/InfoPage";
import NewsPageArtice from "./pages/NewsPage/NewsPageArticle";
import NewsPageSectionArtice from "./pages/NewsPage/NewsPageSectionArticle";
import NewsPageEconomy from "./pages/NewsPage/NewsPageEconomy";
import NewsPageOther from "./pages/NewsPage/NewsPageOther";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/info" />} />
        <Route path="/info" element={<InfoPage />} />
        <Route path="/landing" element={<LandingPage />} />

        <Route path="/news" element={<NewsPage />} />
        <Route path="/news/article" element={<NewsPageArtice />} />
        <Route path="/news/articles" element={<NewsPageSectionArtice />} />
        <Route path="/news/economy" element={<NewsPageEconomy />} />
        <Route path="/news/other" element={<NewsPageOther />} />

        <Route path="/katarium" element={<Katarium />} />
      </Routes>
    </Router>
  );
};

export default App;
