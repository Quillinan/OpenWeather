import { useState, useEffect } from "react";
import styled from "styled-components";
import CitySearchBar from "./CitySearchBar";
import ToggleSwitch from "./ToggleSwitch";
import { useCityInfo } from "../context/CityInfoContext";
import { FaCircle } from "react-icons/fa6";
import { convertCtoF, useFahrenheit } from "../context/FahrenheitContext";

interface PanelProps {}

const Panel: React.FC<PanelProps> = () => {
  const [isFahrenheit, setIsFahrenheit] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const { cityInfo } = useCityInfo();
  const { far, setFar } = useFahrenheit();
  const temperature = far
    ? convertCtoF(cityInfo?.main.temp)
    : cityInfo?.main.temp;
  const [toggleUnit, setToggleUnit] = useState("°F");
  const [currentDateTime, setCurrentDateTime] = useState<Date>(new Date());
  const [color, setColor] = useState<string>("#ec6e4c");

  const handleCityChange = (city: string) => {
    console.log(`Cidade selecionada: ${city}`);
  };

  const toggleFahrenheit = () => {
    setIsFahrenheit((prev) => !prev);

    if (isFahrenheit) {
      setToggleUnit("°C");
      setFar(!far);
    } else {
      setToggleUnit("°F");
      setFar(!far);
    }
  };

  const toggleDarkMode = () => {
    setIsDarkMode((prev) => !prev);
    document.body.classList.toggle("dark-mode", !isDarkMode);
  };

  const formatDate = (date: Date) => {
    const options: Intl.DateTimeFormatOptions = {
      weekday: "long",
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    };
    return date.toLocaleDateString("pt-BR", options);
  };

  const formatTime = (date: Date) => {
    const options: Intl.DateTimeFormatOptions = {
      hour: "2-digit",
      minute: "2-digit",
    };
    return date.toLocaleTimeString("pt-BR", options);
  };

  const getColor = (main: string | undefined): void => {
    if (main === "Clear") {
      setColor("#FFA500");
    } else if (main === "Clouds") {
      setColor("#444244");
    } else if (main === "Rain") {
      setColor("#0619e2");
    } else if (main === "Snow") {
      setColor("#737073");
    } else if (main === "Thunderstorm") {
      setColor("#5d0079");
    } else if (main === "Drizzle") {
      setColor("#246df3");
    } else if (main === "Mist") {
      setColor("#737073");
    } else {
      setColor("#ec6e4c");
    }
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);
    getColor(cityInfo?.weather[0].main);

    return () => clearInterval(intervalId);
  }, [getColor]);

  return (
    <StyledPanel>
      <TitleLabel>
        <img src="/casaco.svg" alt="Casaco" />
        <h1>Leva um casaquinho?</h1>
      </TitleLabel>

      <CitySearchBar onCityChange={handleCityChange} />

      <TemperatureSection>
        <TemperatureLabel color={color}>
          <FaCircle size={70} color={color} />
          <p className="number">
            {temperature !== undefined
              ? `${temperature.toFixed(2)}°${far ? "F" : "C"}`
              : "N/A"}
          </p>
        </TemperatureLabel>
        <p className="text">{cityInfo?.weather[0].description}</p>
      </TemperatureSection>

      <DateSection>
        <p>{formatDate(currentDateTime)}</p>
        <p>{formatTime(currentDateTime)}</p>
      </DateSection>

      <ButtonsSection>
        <ToggleSwitch label={toggleUnit} onToggle={() => toggleFahrenheit()} />
        <ToggleSwitch label="Dark Mode" onToggle={toggleDarkMode} />
      </ButtonsSection>

      <p className="footer">Todos os direitos reservados. 2023.</p>
    </StyledPanel>
  );
};

const StyledPanel = styled.div`
  flex: 1;
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
    font-size: 32px;

    text-align-last: center;
    width: 70%;
    border-bottom: 5px solid #ededed;
  }
`;

const TemperatureLabel = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-left: 25px;

  max-height: 150px;

  .number {
    color: ${(props) => props.color};
    font-family: "Poppins";
    font-size: 150px;
    font-style: normal;
    font-weight: 300;
    line-height: 48px;
    margin-left: 25px;
  }

  .unit {
    color: ${(props) => props.color};
    font-size: 120px;
    font-style: normal;
    font-weight: 300;
    line-height: 48px;
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
