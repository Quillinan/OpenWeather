import styled from "styled-components";
import CitySearchBar from "./CitySearchBar";
import ToggleSwitch from "./ToggleSwitch";

interface PanelProps {}

const Panel: React.FC<PanelProps> = () => {
  const handleCityChange = (city: string) => {
    console.log(`Cidade selecionada: ${city}`);
  };

  return (
    <StyledPanel>
      <TitleLabel>
        <img src="/casaco.svg" alt="Casaco" />
        <h1>Leva um casaquinho?</h1>
      </TitleLabel>

      <CitySearchBar onCityChange={handleCityChange} />

      <TemperatureSection>
        <TemperatureLabel>
          <img src="/ball.svg" alt="Bola" />
          <p>31</p>
          <p className="unit">°C</p>
        </TemperatureLabel>
        <p className="text">Céu aberto</p>
      </TemperatureSection>

      <DateSection>
        <p>16/11/2023</p>
        <p>Quinta-feira, 16:32</p>
      </DateSection>

      <ButtonsSection>
        <ToggleSwitch label="°F" />
        <ToggleSwitch label="Dark Mode" />
      </ButtonsSection>

      <p className="footer">Todos os direitos reservados. 2023.</p>
    </StyledPanel>
  );
};

const StyledPanel = styled.div`
  flex: 1;
  background-color: #fff;
  padding: 55px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;

  h1 {
    color: #222;
    font-family: Poppins;
    font-size: 62px;
    font-style: normal;
    font-weight: 600;
    line-height: 48px;
  }

  .footer {
    position: absolute;
    bottom: 20px;
  }
`;

const TitleLabel = styled.div`
  display: flex;
  flex-direction: row;
  gap: 15px;
  img {
    width: 120px;
    height: 120px;
  }
  h1 {
    font-size: 62px;
    font-weight: 600;
  }
`;

const TemperatureSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
  align-items: center;
  .text {
    color: #222;
    font-family: "Poppins";
    font-size: 32px;
    font-style: normal;
    font-weight: 400;
    line-height: 48px;

    text-align-last: center;
    width: 70%;
    border-bottom: 5px solid #ededed;
  }
`;

const TemperatureLabel = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  max-height: 150px;

  p {
    color: #ec6e4c;
    font-family: "Poppins";
    font-size: 150px;
    font-style: normal;
    font-weight: 300;
    line-height: 48px;
  }

  .unit {
    color: #ec6e4c;
    font-size: 120px;
    font-style: normal;
    font-weight: 300;
    line-height: 48px;
    align-self: flex-start;
    margin-top: 20px;
  }
`;

const DateSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ButtonsSection = styled.div`
  display: flex;
  flex-direction: column;
`;

export default Panel;
