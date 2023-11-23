import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import TodayPage from "./pages/TodayPage";

export default function App() {
  return (
    <PagesContainer>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<TodayPage />} />
        </Routes>
      </BrowserRouter>
    </PagesContainer>
  );
}

const PagesContainer = styled.main`
  background-color: #e2e2e2;
  width: calc(100vw - 40px);
  height: calc(100vh - 40px);
  padding: 20px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
