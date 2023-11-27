import React, {
  createContext,
  useContext,
  useState,
  Dispatch,
  SetStateAction,
} from "react";

interface CityInfo {}

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
