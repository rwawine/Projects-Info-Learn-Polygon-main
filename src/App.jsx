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
import JobPage from "./pages/JobExchange/JobPage";
import PoliticalPage from "./pages/PoliticalPage/PoliticalPage";
import JobPageVacancy from "./pages/JobExchange/JobPageVacancy";
import JobPageCompany from "./pages/JobExchange/JobPageCompany";
import JobPageCompanyDetail from "./pages/JobExchange/JobPageCompanyDetail";
import JobPageNews from "./pages/JobExchange/JobPageNews";
import PoliticalDevice from "./pages/PoliticalPage/PoliticalDevice";
import PoliticalParty from "./pages/PoliticalPage/PoliticalParty";
import PoliticalPersonDetail from "./pages/PoliticalPage/PoliticalPersonDetail";
import PoliticalPersons from "./pages/PoliticalPage/PoliticalPersons";
import PoliticalPersonSearch from "./pages/PoliticalPage/PoliticalPersonSearch";

import NewsPage from "./pages/NewsPage/NewsPage";
import NewsPageArticle from "./pages/NewsPage/NewsPageArticle/NewsPageArticle";
import NewsPageCategory from "./pages/NewsPage/NewsPageCategory/NewsPageCategory";

const App = () => {
  return (
    <LanguageProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/info" />} />
          <Route path="/info" element={<FirstPage />} />

          <Route path="/news" element={<NewsPage />} />
          <Route path="/news/article" element={<NewsPageArticle />} />
          <Route path="/news/category" element={<NewsPageCategory />} />

          <Route path="/katarium" element={<Katarium />} />

          <Route path="/job-exchange" element={<JobPage />} />
          <Route path="/job-exchange/vacancy" element={<JobPageVacancy />} />
          <Route path="/job-exchange/company" element={<JobPageCompany />} />
          <Route path="/job-exchange/company/detail" element={<JobPageCompanyDetail />} />
          <Route path="/job-exchange/news" element={<JobPageNews />} />

          <Route path="/political-site" element={<PoliticalPage />} />
          <Route path="/political-site/device" element={<PoliticalDevice />} />
          <Route path="/political-site/party" element={<PoliticalParty />} />
          <Route path="/political-site/person/detail" element={<PoliticalPersonDetail />} />
          <Route path="/political-site/person" element={<PoliticalPersons />} />
          <Route path="/political-site/person/samira-narges" element={<PoliticalPersonSearch />} />
        </Routes>
      </Router>
    </LanguageProvider>
  );
};

export default App;
