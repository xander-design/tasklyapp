import {
  clearAllSettings,
  getAllSettings,
  getSetting,
  initDatabase,
  saveSetting,
} from "@/features/database/db";
import React, { createContext, ReactNode, useContext, useEffect } from "react";

interface DatabaseContextType {
  saveSetting: (key: string, value: string) => Promise<void>;
  getSetting: (key: string) => Promise<string | null>;
  getAllSettings: () => Promise<Record<string, string>>;
  clearAllSettings: () => Promise<void>;
}

const DatabaseContext = createContext<DatabaseContextType | undefined>(
  undefined,
);

export const useDatabase = () => {
  const context = useContext(DatabaseContext);
  if (!context) {
    throw new Error("useDatabase must be used within a DatabaseProvider");
  }
  return context;
};

interface DatabaseProviderProps {
  children: ReactNode;
}

export const DatabaseProvider: React.FC<DatabaseProviderProps> = ({
  children,
}) => {
  useEffect(() => {
    initDatabase();
  }, []);

  const value = {
    saveSetting,
    getSetting,
    getAllSettings,
    clearAllSettings,
  };

  return (
    <DatabaseContext.Provider value={value}>
      {children}
    </DatabaseContext.Provider>
  );
};
