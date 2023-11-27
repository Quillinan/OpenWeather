import React, { createContext, useContext, useState } from "react";

interface CityInfo {
  cityName: string;
  latitude: number;
  longitude: number;
  minTemperature: number;
  maxTemperature: number;
  humidity: number;
  windSpeed: number;
}

interface CityInfoContextType {
  cityInfo: CityInfo | null;
  setCityInfo: React.Dispatch<React.SetStateAction<CityInfo | null>>;
}

const CityInfoContext = createContext<CityInfoContextType | undefined>(
  undefined
);

export const CityInfoProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [cityInfo, setCityInfo] = useState<CityInfo | null>(null);

  return (
    <CityInfoContext.Provider value={{ cityInfo, setCityInfo }}>
      {children}
    </CityInfoContext.Provider>
  );
};

export const useCityInfo = () => {
  const context = useContext(CityInfoContext);
  if (!context) {
    throw new Error("useCityInfo must be used within a CityInfoProvider");
  }
  return context;
};
