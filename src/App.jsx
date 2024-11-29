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
import FirstPage from "./pages/InfoPage/FirstPage";
import NewsPageArtice from "./pages/NewsPage/NewsPageArticle";
import NewsPageSectionArtice from "./pages/NewsPage/NewsPageSectionArticle";
import NewsPageEconomy from "./pages/NewsPage/NewsPageEconomy";
import NewsPageOther from "./pages/NewsPage/NewsPageOther";
import JobPage from "./pages/JobExchange/JobPage";
import PoliticalPage from "./pages/PoliticalPage/PoliticalPage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/info" />} />
        <Route path="/info" element={<FirstPage />} />
        <Route path="/landing" element={<LandingPage />} />

        <Route path="/news" element={<NewsPage />} />
        <Route path="/news/article" element={<NewsPageArtice />} />
        <Route path="/news/articles" element={<NewsPageSectionArtice />} />
        <Route path="/news/economy" element={<NewsPageEconomy />} />
        <Route path="/news/other" element={<NewsPageOther />} />

        <Route path="/katarium" element={<Katarium />} />

        <Route path="/job-exchange" element={<JobPage />} />

        <Route path="/political-site" element={<PoliticalPage />} />
      </Routes>
    </Router>
  );
};

export default App;
