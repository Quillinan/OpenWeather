import { useState } from "react";
import styled from "styled-components";

interface CitySearchBarProps {
  onCityChange: (city: string) => void;
}

const CitySearchBar: React.FC<CitySearchBarProps> = ({ onCityChange }) => {
  const [formData, setFormData] = useState({ city: "" });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    onCityChange(e.target.value);
  };

  return (
    <StyledLabel>
      <img src="/lupeIcon.svg" alt="Lupa" />
      <StyledInput
        name="city"
        placeholder="Procure por uma cidade"
        value={formData.city}
        onChange={handleInputChange}
      />
    </StyledLabel>
  );
};

const StyledLabel = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 80%;
  padding: 10px;
  gap: 10px;

  border-radius: 24px;
  background: #ededef;
  box-shadow: 0px 24px 48px 0px rgba(49, 79, 124, 0.08);

  img {
    width: 36.697px;
    height: 40px;
  }
`;

const StyledInput = styled.input`
  background: none;
  border: none;
  outline: none;
  padding: 0;
  margin: 0;
  width: 100%;

  color: #424243;
  font-family: Montserrat;
  font-size: 22px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
`;

export default CitySearchBar;
