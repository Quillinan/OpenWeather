import React, {
  createContext,
  useContext,
  useState,
  Dispatch,
  SetStateAction,
} from "react";

interface CityInfo {
  base: string;
  clouds: { all: number };
  cod: number;
  coord: { lon: number; lat: number };
  dt: number;
  id: number;
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
  };
  name: string;
  sys: {
    type: number;
    id: number;
    country: string;
    sunrise: number;
    sunset: number;
  };
  timezone: number;
  visibility: number;
  weather: Array<{}>;
  wind: {
    speed: number;
    deg: number;
  };
}

interface CityInfoContextType {
  cityInfo: CityInfo | null;
  setCityInfo: Dispatch<SetStateAction<CityInfo | null>>;
}

export const CityInfoContext = createContext<CityInfoContextType | undefined>(
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
