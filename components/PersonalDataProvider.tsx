import React, { createContext, useContext, useState } from "react";

const defaultValue: any = "";
const PersonalDataContext = createContext(defaultValue);

export const usePersonalData = () => useContext(PersonalDataContext);

export const PersonalDataProvider = ({ children }: any) => {
  const [personalData, setPersonalData] = useState({});

  const updatePersonalData = (data: any) => {
    setPersonalData((prev) => ({ ...prev, ...data }));
  };

  return (
    <PersonalDataContext.Provider value={{ personalData, updatePersonalData }}>
      {children}
    </PersonalDataContext.Provider>
  );
};
