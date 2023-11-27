import React, { useState } from "react";
import styled from "styled-components";
import TodayInfos from "./TodayInfos";
import GraphicInfo from "./GraphicInfo";
import { useCityInfo } from "../context/CityInfoContext";

interface PrincipalProps {}

const Principal: React.FC<PrincipalProps> = () => {
  const [showTodayInfos, setShowTodayInfos] = useState(true);
  const { cityInfo } = useCityInfo();

  const handleTabClick = (tab: "today" | "nextDays") => {
    setShowTodayInfos(tab === "today");
  };

  return (
    <StyledPrincipal>
      <TitleLabel>
        <p
          className={showTodayInfos ? "p-select" : "p-unselect"}
          onClick={() => handleTabClick("today")}
        >
          Hoje
        </p>
        <p
          className={!showTodayInfos ? "p-select" : "p-unselect"}
          onClick={() => handleTabClick("nextDays")}
        >
          Próximos dias
        </p>
      </TitleLabel>

      <CityLabel>
        <p className="cityName">{cityInfo?.name}</p>
        <p className="noDarkMode">
          Lat: {cityInfo?.coord.lat} Long: {cityInfo?.coord.lon}
        </p>
      </CityLabel>

      {showTodayInfos ? (
        <TodayInfos />
      ) : (
        <GraphicInfo imageUrl="/gráfico.svg" />
      )}

      <Footer>
        <p className="noDarkMode">Dados fornecidos pela</p>
        <p className="enterprise">Open Weather API</p>
      </Footer>
    </StyledPrincipal>
  );
};

const StyledPrincipal = styled.div`
  flex: 2;
  background-color: #efefef;
  padding: 50px;

  display: flex;
  flex-direction: column;
  gap: 50px;

  .noDarkMode {
    color: #222;
  }
`;

const TitleLabel = styled.div`
  display: flex;
  flex-direction: row;
  gap: 72px;
  margin-top: 10px;

  .p-select {
    color: #222;
    font-size: 48px;
  }

  .p-unselect {
    color: #c8c8c8;
    font-size: 48px;
    font-style: normal;
  }
`;

const CityLabel = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: 50px;

  .cityName {
    color: #222;
    font-size: 150px;
    line-height: 100px;
  }
`;

const Footer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  gap: 5px;

  position: absolute;
  bottom: 20px;

  .enterprise {
    color: #96a7f2;
  }
`;

export default Principal;
