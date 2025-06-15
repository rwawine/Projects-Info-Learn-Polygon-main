import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { LanguageProvider } from "./context/LanguageContext";
import Katarium from "./pages/Katarium/Katarium";
import FirstPage from "./pages/InfoPage/FirstPage";

import PoliticalPage from "./pages/PoliticalPage/PoliticalPage/PoliticalPage";
import PartyPage from "./pages/PoliticalPage/PartyPage/PartyPage";
import PoliticalDirectory from "./pages/PoliticalPage/PoliticalDirectory/PliticalDirectory";
import PersonProfile from "./pages/PoliticalPage/PersonProfile/PersonProfile";
import PoliticalSearchPage from "./pages/PoliticalPage/PoliticalSearchPage/PoliticalSearchPage";
import PoliticalSystemPage from "./pages/PoliticalPage/PoliticalSystemPage/PoliticalSystemPage";

import JobBoard from "./pages/JobExchange/JobBoard/JobBoard";
import JobVacancy from "./pages/JobExchange/JobVacancy/JobVacancy";
import CompanyListing from "./pages/JobExchange/JobCompanies/CompanyListing";
import JobBoardPage from "./pages/JobExchange/CompanyProfile/JobBoardPage";
import JobNews from "./pages/JobExchange/JobNews/NewsPage";

import NewsPage from "./pages/NewsPage/NewsPage";
import NewsPageArticle from "./pages/NewsPage/NewsPageArticle/NewsPageArticle";
import NewsPageCategory from "./pages/NewsPage/NewsPageCategory/NewsPageCategory";

const App = () => {
  return (
    <LanguageProvider>
      <Router>
        <Routes>
          {/* Главная страница */}
          <Route path="/" element={<Navigate to="/info" />} />
          <Route path="/info" element={<FirstPage />} />

          {/* Новостной сайт */}
          <Route path="/news" element={<NewsPage />} />
          <Route path="/news/article" element={<NewsPageArticle />} />
          <Route path="/news/category" element={<NewsPageCategory />} />

          {/* Лендинг катариума */}
          <Route path="/katarium" element={<Katarium />} />

          {/* Биржа труда */}
          <Route path="/job-board" element={<JobBoard />} />
          <Route path="/job-board/vacancy" element={<JobVacancy />} />
          <Route path="/job-companies" element={<CompanyListing />} />
          <Route path="/job-companies/profile" element={<JobBoardPage />} />
          <Route path="/job-news" element={<JobNews />} />

          {/* Политический сайт */}
          <Route path="/political-site" element={<PoliticalPage />} />
          <Route path="/political-site/party" element={<PartyPage />} />
          <Route path="/political-site/directory" element={<PoliticalDirectory />} />
          <Route path="/political-site/search" element={<PoliticalSearchPage />} />
          <Route path="/political-site/search/person" element={<PersonProfile />} />
          <Route path="/political-site/system" element={<PoliticalSystemPage />} />

        </Routes>
      </Router>
    </LanguageProvider>
  );
};

export default App;
