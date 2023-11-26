import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "./styles/GlobalStyle";
import TodayPage from "./pages/TodayPage";

export default function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<TodayPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
